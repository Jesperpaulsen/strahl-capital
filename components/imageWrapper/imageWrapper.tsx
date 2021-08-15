import React from 'react'
import DefaultImage from '../../types/DefaultImage'
import Img from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import sanity from '../../services/sanity'

interface ImageWrapperProps {
  image: DefaultImage
  height?: number,
  width?: number
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ image, height, width }) => {
  const imageProps = useNextSanityImage(sanity.client, image)
  
  if (height) imageProps.height = height
  if (width) imageProps.width = width

  return (
    <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
  )
}

export default ImageWrapper