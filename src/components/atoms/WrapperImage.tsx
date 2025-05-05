"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

interface CustomImageProps extends ImageProps {
  quality?: number;
}

const WrapperImage: React.FC<CustomImageProps> = ({
  quality = 100,
  loader = null,
  ...props
}) => {
  const imageLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    return `/_next/image?url=${src}&w=${width}&q=${quality}`;
  };

  return (
    <Image
      loader={loader || imageLoader}
      quality={quality}
      {...props}
      alt={props.alt}
    />
  );
};

export default WrapperImage;
