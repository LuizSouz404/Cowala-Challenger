import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <Container {...rest} className={color}>
      {title}
    </Container>
  )
}