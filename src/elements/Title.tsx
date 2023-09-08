import React from "react";
import classNames from "classnames/bind";
import { eTheme } from "@/utils/types";
import { checkValue, getKeyByValue } from "@/utils/function";

import Styles from "@/styles/modules/Title.module.scss";

const cx = classNames.bind(Styles);

// Enum: Title Size
export enum titleSize {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

export interface TitleProps {
  title: React.ReactNode;
  size?: titleSize;
  theme?: eTheme;
}

export const Title: React.FC<TitleProps> = ({ title, size = 3, theme = 0 }) => {
  const themeName = getKeyByValue(eTheme, theme);
  const sizeName = getKeyByValue(titleSize, size);
  const style = cx({
    title: true,
    [Styles[`${themeName}`]]: checkValue(themeName),
    [Styles[`${sizeName}`]]: checkValue(sizeName),
  });

  return (
    <>
      {sizeName && sizeName === "H1" && <h1 className={style}>{title}</h1>}
      {sizeName && sizeName === "H2" && <h2 className={style}>{title}</h2>}
      {sizeName && sizeName === "H3" && <h3 className={style}>{title}</h3>}
      {sizeName && sizeName === "H4" && <h4 className={style}>{title}</h4>}
      {sizeName && sizeName === "H5" && <h5 className={style}>{title}</h5>}
      {sizeName && sizeName === "H6" && <h6 className={style}>{title}</h6>}
    </>
  );
};
