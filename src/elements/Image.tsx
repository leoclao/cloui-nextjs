import React from "react";
import classNames from "classnames/bind";

import Styles from '@/styles/modules/Img.module.scss'
import Image from "next/image";

const cx = classNames(Styles);

export interface ImgProps {
  src: string;
  width?: number;
  height?: number;
  desc?: string;
  loader?: Function;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: string;
  onLoadingCompete?: Function;
  onLoad?: Function;
  onError?: Function;
  loading?: string
  blurDataURL?: string;
  srcset?: string;
  ratio?: number;
}

export const Img: React.FC<ImgProps> = ({
  src,
  width,
  height,
  desc,
  loader,
  fill,
  sizes,
  quality,
  priority,
  placeholder,
  onLoadingCompete,
  onLoad,
  onError,
  loading,
  blurDataURL,
  srcset,
  ratio
}) => {
  const imgStyle = classNames(Styles.C, {
    [Styles.Ratio${ ratio }]: ratio && true,
  });

return <Image src={src} width={width} height={height} alt={desc} loader={loader} fill={fill} sizes={sizes} quality={quality} priority={priority} placeholder={placeholder} onLoadingComplete={onLoadingComplete} onLoad={onLoad} onError={onError} loading={loading} blurDataURL={blurDataURL} srcset={srcset} ratio={ratio} />
};
