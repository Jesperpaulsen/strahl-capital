import React from 'react'
import { useState } from 'react'
import DefaultImage from '../../types/DefaultImage'
import ImageWrapper from '../imageWrapper/imageWrapper'
import Link from 'next/link'
interface CardProps {
  image: DefaultImage,
  title: string,
  subtitle: string,
  href: string
  slugPrefix?: string
  large?: boolean
}

const Component = (props) => props.slugPrefix ? <Link {...props} /> : <a {...props} />

const Card: React.FC<CardProps> = ({ image, title, subtitle, href, slugPrefix, large }) => {
  const [isHovering, setIsHovering] = useState(false)
  const target = slugPrefix ? '_blank' : '_self'
  let url = slugPrefix ? `${slugPrefix}/${href}` : href
  
  return(
    <Component
      slugPrefix={slugPrefix}
      href={url}
      target={target}
      rel="noreferrer"
      className="min-w-full"
    >
      {large ?
        <div className="shadow-md rounded w-80 h-96 relative hover:shadow-2xl transition-shadow ease-in-out duration-300 cursor-pointer">
           {image?.asset && <ImageWrapper image={image} layout="fill" className="w-64 h-60 bg-green-400 top-0 absolute"/>}
           <div className="text-2xl mt-auto text-center absolute bottom-0 bg-white pt-4 pb-2">
             {title}
           </div>
        </div>
      :

      <div 
        className="shadow-md relative rounded w-36 h-36 md:w-60 md:h-60 block bg-green-400 cursor-pointer hover:shadow-2xl transition-shadow ease-in-out duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {image?.asset && <ImageWrapper image={image} layout="fill" className="absolute w-36 h-36 md:w-60 md:h-60 top-0 bottom-0 m-auto" />}
        {isHovering && 
          <div className="absolute top-0 text-center w-full h-full flex justify-center items-center bg-black bg-opacity-90 rounded transition-opacity">
            <div className="text-white">
              <div className="text-2xl">
                {title}
              </div>
              <div>
                {subtitle}
              </div>
            </div>
      </div>}
      </div>}
    </Component>
    )
}

export default Card