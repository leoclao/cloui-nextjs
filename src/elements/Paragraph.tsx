import React from 'react';
import classNames from 'classnames/bind';
import { eTheme, eSize } from '@/utils/types';
import { checkValue, getKeyByValue } from '@/utils/function';

import Styles from '@/styles/modules/Paragraph.module.scss';

const cx = classNames.bind(Styles);

export interface ParagraphProps {
  content: React.ReactNode;
  size?: eSize;
  theme?: eTheme;
}

export const Paragraph: React.FC<ParagraphProps> = ({ content, size, theme }) => {
  const themeName = getKeyByValue(eTheme, theme);
  const sizeName = getKeyByValue(eSize, size);
  const paragraphStyle = cx({
    C: (sizeName ? false : true),
    [Styles[`${themeName}`]]: checkValue(themeName),
    [Styles[`${sizeName}`]]: checkValue(sizeName),
  });

  const ParagraphDom = <p className={paragraphStyle}>{content}</p>

  return ParagraphDom;
};
