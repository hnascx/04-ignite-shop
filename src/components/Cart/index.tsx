import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFooter, CartFooterDetails, CartProduct, CartProductDetails, CartProductImage } from './syles';
import { X } from 'phosphor-react';
import Image from 'next/image';

import shirtImg from '../../../public/Shirt.png'
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
                    src={shirtImg}
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