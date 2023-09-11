import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import { eSize } from "@/utils/types";
import { checkValue, getKeyByValue } from "@/utils/function";

import Styles from "@/styles/modules/Brand.module.scss";

const cx = classNames.bind(Styles);

interface BrandProps {
  size?: eSize;
  href?: string | undefined;
  description?: string | undefined;
  imgSrc?: string | undefined;
  imgWidth?: number | `${number}` | undefined;
  imgHeight?: number | `${number}` | undefined;
}

const Brand: React.FC<BrandProps> = ({ size = 3, href, description, imgSrc, imgWidth, imgHeight }) => {
  const urlObject = { pathname: href };
  const sizeName = getKeyByValue(eSize, size);
  const style = cx({
    brand: true,
    [Styles[`${sizeName}`]]: checkValue(sizeName),
  });
  const imageDom = imgSrc && (
    <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={`${description}`} />
  );
  const brandDom = href ? (
    <Link className={style} href={urlObject} title={description}>
      {imageDom}
    </Link>
  ) : (
    <span className={style}>{imageDom}</span>
  );

  return brandDom;
};

export default Brand;
