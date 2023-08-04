import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { eSize, aspectRatio } from "@/utils/types";
import { getKeyByValue, checkValue } from "@/utils/function";

import Styles from '@/styles/modules/Img.module.scss'

const cx = classNames(Styles);

export interface ImgProps {
  src: string;
  width?: number;
  height?: number;
  desc?: string;
  loader?: Function;
  fill?: boolean;
  sizes?: string; //"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality?: number;
  priority?: boolean;
  placeholder?: string;
  onLoadingCompete?: Function;
  onLoad?: Function;
  onError?: Function;
  loading?: string
  blurDataURL?: string;
  ratio?: aspectRatio;
}

export const Img: React.FC<ImgProps> = ({
  src,
  width,
  height,
  desc,
  loader,
  fill,
  sizes = eSize.Medium,
  quality,
  priority,
  placeholder,
  onLoadingCompete,
  onLoad,
  onError,
  loading,
  blurDataURL,
  ratio = 0
}) => {

  const getRatioValue = getKeyByValue(aspectRatio, ratio);
  const ratioName = checkValue(getRatioValue) ? `Ratio${getRatioValue}` : 'Auto'

  const imgStyle = classNames(Styles.C, {
    [Styles[`${ratioName}`]]: true,
  });

  // Follow attribute image component (nextjs)
  return <Image className={imgStyle} src={src} width={width} height={height} alt={desc} loader={loader} fill={fill} sizes={sizes} quality={quality} priority={priority} placeholder={placeholder} onLoadingCompete={onLoadingCompete} onLoad={onLoad} onError={onError} loading={loading} blurDataURL={blurDataURL} />
};
