import Link from "next/link";
import { ImageContainer, ImagesContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
  productsImages: string[];
}

export default function Success({ customerName, product, productsImages }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra realizada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {productsImages.map((image, i) => (
            <ImageContainer key={i}>
              <Image
                src={image} 
                width={120} 
                height={110} 
                alt="" 
                />
            </ImageContainer>
          ))}
        </ImagesContainer>
        
        <h1>Compra realizada!</h1>
        
        {productsImages.length === 1 ? 
          <p>
            Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa!
          </p> 
          :
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de <strong>{productsImages.length} camisas da Rocketseat</strong> já está a caminho da sua casa!
          </p>
        }

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      product,
      productsImages,
    }
  }
}