import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFooter, CartFooterDetails, CartProduct, CartProductDetails, CartProductImage } from './syles';
import { X } from 'phosphor-react';
import Image from 'next/image';

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight='bold' />
          </CartClose>

            <h2>Carrinho de compras</h2>

            <section>
              {/* Ainda não temos produtos aqui &#128532; */}

              <CartProduct>
                <CartProductImage>
                  <Image
                    width={100}
                    height={93}
                    alt=""
                    src="https://s3-alpha-sig.figma.com/img/389f/ecc9/dfd930c7acf7b3b2e05b363813fe1f6b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1JBpk14Zj05x7dMo5WFHqVBwPIh~CzlYSpVuzhjmT6GCv3AP8fK2LlrpZPPBO4bA6jv8BY3WYIxmR62sd~FOLK9i3aEdD3nC2fvHicX9smLD04fqWRx-eLVTV2uvCiYCZJwWTHcr0BnHXkayL4VFxD0H3nydwn3-hR8ZTDjwh4xujPXvammYUmGe~Lx0rrxpzpfbQmZxJaOQEVSV-392ndVrc-D2x1MvZiW7Zk39lXaVUX9lBWAVYxfmVGahyg6oFCey3oC9Ur71iU88XaM8w3YQ3kpZ3ohXMztAm6eckgHnaxh2Xku1pMIppkz2I4IGdQM0pesE6y4kXCqHe9PYQ__"
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>Produto 1</p>
                  <strong>R$50,00</strong>
                  <button>Remover</button>
                </CartProductDetails>
              </CartProduct>
            </section>

            <CartFooter>
              <CartFooterDetails>
                <div>
                  <span>Quantidade</span>
                  <p>2 itens</p>
                </div>
                <div>
                  <span>Valor total</span>
                  <p>R$100,00</p>
                </div>
              </CartFooterDetails>
              <button>Finalizar compra</button>
            </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}