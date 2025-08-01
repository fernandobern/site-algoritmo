//Botão que tem uma cor de destaque ou não
//recebe sempre um título
//hover que aumenta muito pouco o tamanho (rem)
//no css já tem a estilização padrão do botão, preciso definir que caso não seja emphasis usa-la


//destaque usa o gradiente com cor inicial #23d2ff e 3f4def
import React from "react";
import './button.css'

type ButtonProps = {
  buttonTitle: string;
  buttonColor?: string; // Sobrescreve a cor se for fornecida
  buttonEmphasis?: boolean; // Define se o botão deve ter destaque
};

const Button: React.FC<ButtonProps> = ({
  buttonTitle,
  buttonColor,
  buttonEmphasis = false,
}) => {
  const baseClass = "button";
  const emphasisStyle = {
    background: "linear-gradient(90deg, #23d2ff 0%, #3f4def 100%)",
    color: "#fff",
  };
  const customStyle = buttonColor ? { backgroundColor: buttonColor, color: "#fff" } : {};

  return (
    <a
      href="#"
      className={baseClass}
      style={buttonEmphasis ? emphasisStyle : customStyle}
    >
      {buttonTitle}
    </a>
  );
};

export default Button;
