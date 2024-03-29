import React, { ReactEventHandler } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { aspectRatio } from "@/utils/types";
import { getKeyByValue, checkValue } from "@/utils/function";

import Styles from "@/styles/modules/Img.module.scss";

type OnLoadingComplete = (img: HTMLImageElement) => void;
const cx = classNames.bind(Styles);

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
  placeholder?: "empty" | "blur" | "data:image/...";
  onLoadingComplete?: OnLoadingComplete | undefined;
  onLoad?: ReactEventHandler<HTMLImageElement> | undefined;
  onError?: ReactEventHandler<HTMLImageElement> | undefined;
  loading?: "lazy" | "eager" | undefined;
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
  onLoadingComplete, // Follow attribute image component (nextjs)
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
  const figureClass = cx({figure: true});
  const figcaptionClass = cx({figcaption: true});

  const imgClass = cx({
    C: true,
    [Styles[`${ratioName}`]]: true,
  });

  const isLocal = src.startsWith("/");
  const isExternal = src.startsWith("http") || src.startsWith("https");

  const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }): string => {
    let newImgAssets:string = ''; // Khởi tạo với giá trị mặc định là chuỗi rỗng
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
      onLoadingComplete={onLoadingComplete}
      onLoad={onLoad}
      onError={onError}
      loading={loading}
      blurDataURL={blurDataURL}
    />
  );
  const imgFigcaption = (
    <figure className={figureClass}>
      {imgNone}
      {desc && <figcaption className={figcaptionClass}>{desc}</figcaption>}
    </figure>
  );

  const imgDom = figcaption ? imgFigcaption : imgNone;

  // Follow attribute image component (nextjs)
  return imgDom;
};
