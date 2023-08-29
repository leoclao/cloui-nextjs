import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { aspectRatio } from "@/utils/types";
import { getKeyByValue, checkValue } from "@/utils/function";

import Styles from "@/styles/modules/Img.module.scss";

const cx = classNames(Styles);

export interface ImgProps {
  src: string;
  width: number;
  height: number;
  desc: string;
  loader?: Function;
  fill?: boolean;
  sizes?: string; //"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality?: number;
  priority?: boolean;
  placeholder?: string;
  onLoadingCompete?: Function;
  onLoad?: Function;
  onError?: Function;
  loading?: string;
  blurDataURL?: string;
  ratio?: aspectRatio;
  figcaption?: boolean;
}

const assets = "https://cloui.com/assets/";

// const handleLoadingCompleted = () => {
//   console.log('Image has finished loading');
// };

export const Img: React.FC<ImgProps> = ({
  src, // Follow attribute image component (nextjs)
  width, // Follow attribute image component (nextjs)
  height, // Follow attribute image component (nextjs)
  desc, // Custom attribute image, this use for alt and description
  loader, // Follow attribute image component (nextjs)
  fill, // Follow attribute image component (nextjs)
  sizes, // Follow attribute image component (nextjs)
  quality, // Follow attribute image component (nextjs)
  priority, // Follow attribute image component (nextjs)
  placeholder, // Follow attribute image component (nextjs)
  onLoadingCompete, // Follow attribute image component (nextjs)
  onLoad, // Follow attribute image component (nextjs)
  onError, // Follow attribute image component (nextjs)
  loading = "lazy", // Follow attribute image component (nextjs)
  blurDataURL, // Follow attribute image component (nextjs)
  ratio = 0,
  figcaption,
}) => {
  // const [loaded, setLoaded] = useState(false);

  const getRatioValue = getKeyByValue(aspectRatio, ratio);
  const ratioName = checkValue(getRatioValue)
    ? `Ratio${getRatioValue}`
    : "Auto";

  const figureClass = classNames(Styles.figure);
  const figcaptionClass = classNames(Styles.figcaption);

  const imgClass = classNames(Styles.C, {
    [Styles[`${ratioName}`]]: true,
  });

  const isLocal = src.startsWith("/");
  const isExternal = src.startsWith("http") || src.startsWith("https");

  const imageLoader = ({ src, width, quality }) => {
    let newImgAssets = null;
    if (isLocal) newImgAssets = `${assets}${src}?w=${width}&q=${quality || 75}`;
    if (isExternal) newImgAssets = `${src}?w=${width}&q=${quality || 75}`;
    return newImgAssets;
  };

  const imgNone = (
    <Image
      className={imgClass}
      src={src}
      width={width}
      height={height}
      alt={desc}
      loader={imageLoader}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      placeholder={placeholder}
      onLoadingCompete={onLoadingCompete}
      onLoad={onLoad}
      onError={onError}
      loading={loading}
      blurDataURL={blurDataURL}
    />
  );
  const imgFigcaption = (
    <figure className={figureClass}>
      <Image
        className={imgClass}
        src={src}
        width={width}
        height={height}
        alt={desc}
        loader={imageLoader}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        onLoadingCompete={onLoadingCompete}
        onLoad={onLoad}
        onError={onError}
        loading={loading}
        blurDataURL={blurDataURL}
      />
      {desc && <figcaption className={figcaptionClass}>{desc}</figcaption>}
    </figure>
  );

  const imgDom = figcaption ? imgFigcaption : imgNone;

  // Follow attribute image component (nextjs)
  return imgDom;
};
