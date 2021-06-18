import React from "react";

// Styles
import { ButtonPrimaryStyled } from "./ButtonStyles.js";
import { ButtonSecondaryStyled } from "./ButtonStyles.js";

// Como evitar el error de onClick en la prop.
// 1. Dejando un valor por defecto onClick = () => {}
// 2. Testear todas las props (muy costoso en tiempo y mantenimiento)
// 3. Utilizar typescript.
// Typescript/Flow reduce notablemente la necesidad de realizar test unitarios sobre nuestros componentes.

export const ButtonPrimary = ({
  text,
  type,
  onClick,
  isDisabled = false,
  icon,
  iconPosition,
  textStyles,
  iconStyles,
  buttonStyles
}) => {
  return (
    <ButtonPrimaryStyled
      onClick={onClick}
      type={type}
      style={{...buttonStyles}}
    >
      {text}
    </ButtonPrimaryStyled>
  );
};

export const ButtonSecondary = ({
  text,
  type,
  onClick,
  isDisabled = false,
  icon,
  iconPosition,
  textStyles,
  iconStyles,
  buttonStyles,
}) => {
  return (
    <ButtonSecondaryStyled
      onClick={onClick}
      type={type}
      style={{ ...buttonStyles }}
    >
      {text}
    </ButtonSecondaryStyled>
  );
};
