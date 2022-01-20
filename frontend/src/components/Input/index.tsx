import { Container } from "./styles";
import { IconBaseProps } from "react-icons";
import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: IconBaseProps;
}

export function Input({ icon, name, ...rest }: InputProps) {
  const [isActive, setIsActive] = useState(false);

  function toggleInput() {
    setIsActive(!isActive);
  }

  return (
    <Container htmlFor={name} isFilled={!!isActive}>
      <strong>{name}</strong>
      <div>
        {!!icon && (icon)}

        <input
          {...rest}
          id={name}
          onFocus={toggleInput}
          onBlur={toggleInput}
        />
      </div>
    </Container>
  )
}