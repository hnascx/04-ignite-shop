import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFooter, CartFooterDetails, CartProduct, CartProductDetails, CartProductImage } from './syles';
import { X } from 'phosphor-react';
import Image from 'next/image';

import shirtImg from '../../../public/Shirt.png'
import { useCart } from '../../hooks/useCart';
export function Cart() {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    // minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  }).format(cartTotal)

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
              {cartQuantity <= 0 && <p>Ainda não temos produtos aqui &#128532;</p>}

              {cartItems.map((cartItem) =>(
                <CartProduct key={cartItem.id}>
                  <CartProductImage>
                    <Image
                      width={100}
                      height={93}
                      alt=""
                      src={cartItem.imageUrl}
                    />
                  </CartProductImage>
                  <CartProductDetails>
                    <p>{cartItem.name}</p>
                    <strong>{cartItem.price}</strong>
                    <button onClick={() => removeCartItem(cartItem.id)}>Remover</button>
                  </CartProductDetails>
                </CartProduct>
              ))}
            </section>

            <CartFooter>
              <CartFooterDetails>
                <div>
                  <span>Quantidade</span>
                  <p>
                    {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
                  </p>
                </div>
                <div>
                  <span>Valor total</span>
                  <p>{formattedCartTotal}</p>
                </div>
              </CartFooterDetails>
              <button>Finalizar compra</button>
            </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}