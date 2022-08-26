import React from "react";
import { useState } from "react";
import DefaultImage from "../../types/DefaultImage";
import ImageWrapper from "../imageWrapper/imageWrapper";
import Link from "next/link";
interface CardProps {
  image: DefaultImage;
  title: string;
  subtitle: string;
  href: string;
  slugPrefix?: string;
  large?: boolean;
  noPadding?: boolean;
}


const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  href,
  slugPrefix,
  large,
  noPadding = true,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const url = slugPrefix ? `${slugPrefix}/${href}` : href;
  const target = slugPrefix ? "_self" : "_blank";
  
  return (
    <Link href={url || ""} passHref>
      <a target={target} rel="noreferrer" className="min-w-full">
        {large ? (
          <div className="shadow rounded w-36 h-44 md:w-80 md:h-96 relative hover:shadow-2xl transition-shadow ease-in-out duration-300 cursor-pointer bg-gray-100 bg-opacity-70">
            {image?.asset && (
              <ImageWrapper
                image={image}
                layout="fill"
                className="w-64 h-60 top-0 absolute"
              />
            )}
            <div className="md:text-2xl mt-auto text-center absolute bottom-0 pt-4 pb-2 w-full">
              {title}
            </div>
          </div>
        ) : (
          <div
            className="shadow-md relative rounded w-36 h-36 md:w-60 md:h-60 block bg-green-400 bg-opacity-40 cursor-pointer hover:shadow-2xl transition-shadow ease-in-out duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {image?.asset && (
              <div className="w-full flex justify-center items-center h-full">
                <div className={`relative ${noPadding ? 'w-full' : 'w-11/12'} h-full`}>
                  <ImageWrapper
                    image={image}
                    layout="fill"
                  />
                </div>
              </div>
            )}

            {isHovering && (
              <div className="absolute top-0 text-center w-full h-full flex justify-center items-center bg-black bg-opacity-90 rounded transition-opacity">
                <div className="text-white">
                  <div className="text-2xl">{title}</div>
                  <div>{subtitle}</div>
                </div>
              </div>
            )}
          </div>
        )}
      </a>
    </Link>
  );
};

export default Card;
