import React from 'react'
import { useState } from 'react'
import DefaultImage from '../../types/DefaultImage'
import ImageWrapper from '../imageWrapper/imageWrapper'

interface CardProps {
  image: DefaultImage,
  title: string,
  subtitle: string,
  href: string
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, href }) => {

  return <div className="shadow-md w-60 h-60 block">
    <div className="">
        <ImageWrapper image={image} />
      <div className="">
        {subtitle}
      </div>
    </div>
  </div>
}

export default Card