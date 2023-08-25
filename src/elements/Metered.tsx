import React from "react";
import classNames from "classnames/bind";
import { eTheme, eSize, eDirection, eGeometry, eMessage } from "utils/types";
import { checkValue, getKeyByValue } from "utils/function";

import Styles from "styles/modules/Metered.module.scss";

const cx = classNames.bind(Styles);

export interface MeteredProps {
  icon?: React.ReactNode;
  size?: eSize;
  theme?: eTheme;
  status?: eMessage;
  timer?: number;
  geometry?: eGeometry;
  vertical?: boolean;
}

export const Metered: React.FC<MeteredProps> = ({
  icon,
  size = 3,
  theme = 0,
  status = 0,
  timer = 0,
  geometry = 0,
  vertical = false,
}) => {
  const geoName = getKeyByValue(eGeometry, geometry);
  const verName = vertical && "Vertical";

  const sizeName = getKeyByValue(eSize, size);
  const themeName = getKeyByValue(eTheme, theme);
  const statusName = getKeyByValue(eMessage, status);

  const newSizeName =
    geoName === "Circle" ? `${sizeName + geoName}` : `${sizeName + verName}`;

  const meteredStyle = cx({
    C: true,
    [Styles[`${newSizeName}`]]: checkValue(sizeName),
    [Styles[`${themeName}`]]: checkValue(themeName),
    [Styles[`${statusName}`]]: checkValue(statusName),
  });

  const MeteredIcon = icon && icon;
  const MeteredDom =
    geoName === "Line" ? (
      <meter className={meteredStyle} />
    ) : (
      <div className={meteredStyle}>{MeteredIcon}</div>
    );

  return MeteredDom;
};
