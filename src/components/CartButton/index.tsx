import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "./styles";
import { ComponentProps } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer>
export function CartButton({ ...props }: CartButtonProps) {
  return (
    <CartButtonContainer { ...props }>
      <Handbag weight="bold" />
    </CartButtonContainer>
  )
}