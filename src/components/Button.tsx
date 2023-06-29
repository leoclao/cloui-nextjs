import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames/bind";

import { eTheme, eSize } from '@/utils/types';
import { checkValue, getKeyByValue } from '@/utils/function';

import Styles from '@/styles/modules/Button.module.scss';

const cx = classNames.bind(Styles);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  title?: string;
  size?: eSize;
  theme?: eTheme;
  rounded?: sSize | 'Full';
  vertical?: boolean;
  hollow?: boolean;
  disabled?: boolean;
  customStyle?: string;
  iconLeft: React.ReactNode;
  iconRight: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  title,
  size,
  theme,
  rounded,
  vertical = false,
  hollow = false,
  disabled = false,
  customStyle,
  iconLeft,
  iconRight,
  ...props
}) => {
  const btnThemeName = getKeyByValue(eTheme, theme) + (hollow && 'Hollow');
  const btnSizeName = getKeyByValue(eSize, theme);

  const btnClass = cx({
    C: true,
    [Styles[${btnThemeName}]]: checkValue(theme),
    [Styles[${btnSizeName}]]: checkValue(size),
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
      {label && <span className={}>{label}</span>}
      {iconRight}
    </button>
  )
}
