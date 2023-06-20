import React from 'react';
import classNames from 'classnames/bind';
import { eTheme, eSize } from '@/utils/types';
import { checkValue, getKeyByValue } from '@/utils/function';

import Styles from '@/styles/modules/Label.module.scss';

const cx = classNames.bind(Styles);

export interface LabelProps {
  text: React.ReactNode;
  size?: eSize;
  theme?: eTheme;
  customStyle?: string;
}

export const Label: React.FC<LabelProps> = ({ text, size, theme, customStyle }) => {
  const themeName = getKeyByValue(eTheme, theme);
  const sizeName = getKeyByValue(eSize, size);
  const style = cx(
    {
      'label': true,
      [Styles[`${themeName}`]]: checkValue(themeName),
      [Styles[`${sizeName}`]]: checkValue(sizeName),
    },
    customStyle
  )

  return <span className={style}>{text}</span>;
};
