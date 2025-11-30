import React from "react";
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
}) => {
  const url = slugPrefix ? `${slugPrefix}/${href}` : href;
  const target = slugPrefix ? "_self" : "_blank";

  return (
    <Link href={url || ""} passHref legacyBehavior>
      <a
        target={target}
        rel="noreferrer"
        className="block group h-full"
      >
        {large ? (
          // Large card variant
          <div className="relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 h-48 md:h-72 rounded-2xl bg-neutral-800 border border-neutral-700 group-hover:border-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/10">
            {image?.asset && (
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="relative w-full h-3/4">
                  <ImageWrapper
                    image={image}
                    layout="fill"
                    className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
              <div className="text-xs md:text-base font-semibold text-white text-center truncate">
                {title}
              </div>
              {subtitle && (
                <div className="text-xs text-neutral-400 text-center mt-0.5 truncate">
                  {subtitle}
                </div>
              )}
            </div>
          </div>
        ) : (
          // Default card - text-first design with logo accent
          <div className="relative overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5 rounded-xl bg-white border border-neutral-200 group-hover:border-primary-400 group-hover:shadow-md p-3 md:p-4 h-full flex flex-col">
            {/* Logo - small and contained */}
            <div className="h-10 md:h-12 mb-2 md:mb-3 flex items-center justify-start">
              {image?.asset && (
                <div className="relative h-full w-full max-w-[100px] md:max-w-[120px]">
                  <ImageWrapper
                    image={image}
                    layout="fill"
                    className="object-contain object-left"
                  />
                </div>
              )}
            </div>

            {/* Company name - always visible */}
            <div className="text-xs md:text-sm font-semibold text-neutral-900 leading-tight group-hover:text-primary-700 transition-colors line-clamp-2">
              {title}
            </div>

            {/* Location/subtitle */}
            {subtitle && (
              <div className="text-xs text-neutral-500 mt-1 truncate">
                {subtitle}
              </div>
            )}

            {/* Visit link - push to bottom */}
            <div className="mt-auto pt-2 md:pt-3 flex items-center text-primary-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Visit</span>
              <svg
                className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default Card;
