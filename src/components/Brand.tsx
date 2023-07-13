import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import eSize from '@/utils/types';
import { checkValue, getKeyByValue } from '@/utils/function';

import Styles from '@/styles/modules/Brand.module.scss';

const cx = classNames.bind(Styles);

interface BrandProps {
  size?: eSize;
  href?: string | undefined;
  description?: string | undefined;
  imgSrc?: string | undefined;
  imgWidth?: string | undefined;
  imgHeight?: string | undefined;
}

const Brand: React.FC<BrandProps> = ({ size }) => {
  const sizeName = getKeyByValue(eSize, size);
  const style = cx({
    brand: true,
    [Styles[`${sizeName}`]]: checkValue(sizeName),
  });
  const imageDom = imgSrc && (
    <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={description} />
  );
  const brandDom = href ? (
    <Link className={style} href={href} title={description}>
      {imageDom}
    </Link>
  ) : (
    <span className={style}>{imageDom}</span>
  );

  return brandDom;
};

export default Brand;
