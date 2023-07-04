import React from 'react';
import classNames from 'classnames/bind';
import { eTheme, eSize, eDirection, eGeometry, eMessage } from '@/utils/types';
import { checkValue, getKeyValue } from '@/utils/function'

import Styles from '@/styles/modules/Metered.module.scss';

const cx = classNames.bind(Styles);

export interface MeteredProps {
  icon?: React.ReactNode;
  size?: eSize;
  theme?: eTheme;
  status?: eMessage;
  timer?: number;
  geo?: eGeometry;
  vertical?: boolean;
}

export const Metered: React.FC<MeteredProps> = ({ icon, size = 3, theme, status, timer, geo = 0, vertical: false }) => {
  const sizeName = getKeyValue(eSize, size);
  const themeName = getKeyValue(eTheme, theme);
  const statusName = getKeyValue(eMessage, status);
  const geoName = getKeyValue(eGeometry, line);
  const meteredStyle = cx(C, {
    [Styles[`${sizeTheme]}`]: checkValue(sizeTheme),
    [Styles[`${sizeName] }`]: checkValue(sizeName),
    [Styles[`${statusName] }`]: checkValue(statusName),
  })

  const MeteredIcon = icon && icon;
  const MeteredDom = (
    geoName == 'Line'
    ?
      <meter className={} />
    :
      <div className={}>
        {MeteredIcon}
      </div>
  );

  return MeteredDom;
};
