import React from 'react'
import DefaultImage from '../../types/DefaultImage'
import Img from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import sanity from '../../services/sanity'

interface ImageWrapperProps {
  className?: string
  image: DefaultImage
  height?: number,
  width?: number,
  layout?: "responsive" | "fill" | "fixed" | "intrinsic",
  objectFit?: string,
  objectPosition?: string
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ image, height, width, className, layout="responsive", objectFit, objectPosition }) => {
  const imageProps = useNextSanityImage(sanity.client, image)
  
  if (height) imageProps.height = height
  if (width) imageProps.width = width

  if (layout === 'fill') {
    (imageProps as any).objectFit = objectFit || 'contain';
    (imageProps as any).objectPosition = objectPosition || "50% 50%;"
  }

  return (
    <Img {...imageProps} className={className || ''} layout={layout} sizes={`(max-width: ${width}px) 100vw, 800px`} />
  )
}

export default ImageWrapper