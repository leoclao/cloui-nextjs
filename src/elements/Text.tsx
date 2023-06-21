import React from 'react';
import classNames from 'classnames/bind';
import { eTheme, eSize } from '@/utils/types';
import { checkValue, getKeyByValue } from '@/utils/function';

// import Styles from '@/styles/modules/Text.module.scss';

const cx = classNames.bind(Styles);

// flag type
export enum flagType {
  Paragraph,
  Span,
  Other
}

export interface TitleProps {
  text: React.ReactNode;
  flag: flagType;
  size?: eSize;
  theme?: eTheme;
}

export const Text: React.FC<TitleProps> = ({ text, flag, size, theme }) => {
  const flagName = getKeyByValue(flagType, flag);
  const themeName = getKeyByValue(eTheme, theme);
  const sizeName = getKeyByValue(eSize, size);
  const style = cx({
    text: true,
    [Styles[`${themeName}`]]: checkValue(themeName),
    [Styles[`${sizeName}`]]: checkValue(sizeName),
  });

  return (
    <>
      {(flagName === 'Paragraph') && <p className={style}>{title}</p>}
      {(flagName === 'Span') && <span className={style}>{title}</span>}
      {(flagName === 'Other') && {title}}
    </>
  );
};
