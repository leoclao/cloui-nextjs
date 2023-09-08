import React, { ButtonHTMLAttributes, useState } from "react";
import classNames from "classnames/bind";

import { eTheme, eSize } from "@/utils/types";
import { checkValue, getKeyByValue } from "@/utils/function";

import Styles from "@/styles/modules/Button.module.scss";

const cx = classNames.bind(Styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  title?: string;
  size?: eSize;
  theme?: eTheme;
  rounded?: eSize | "Full";
  vertical?: boolean;
  hollow?: boolean;
  disabled?: boolean;
  customStyle?: string;
  iconLeft: React.ReactNode;
  iconRight: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  title,
  size = 3,
  theme = 0,
  rounded,
  vertical = false,
  hollow = false,
  disabled = false,
  customStyle,
  iconLeft,
  iconRight,
  ...props
}) => {
  const btnThemeName = getKeyByValue(eTheme, theme) + (hollow && "Hollow");
  const btnSizeName = getKeyByValue(eSize, size);

  const btnClass = cx({
    C: true,
    [Styles[`${btnThemeName}`]]: checkValue(theme),
    [Styles[`${btnSizeName}`]]: checkValue(size),
    customStyle: checkValue(customStyle),
  });

  const [isDisabled, setIsDisabled] = useState(disabled);

  return (
    <button
      className={btnClass}
      disabled={isDisabled}
      aria-disabled={checkValue(isDisabled)}
      {...props}
    >
      {iconLeft}
      {/* {label && <span className={}>{label}</span>} */}
      {label && <span>{label}</span>}
      {iconRight}
    </button>
  );
};

export default Button;
