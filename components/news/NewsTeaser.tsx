import Link from "next/link";
import DefaultImage from "../../types/DefaultImage";
import ImageWrapper from "../imageWrapper/imageWrapper";
import { format } from "date-fns";

interface NewsTeaserProps {
  image: DefaultImage;
  title: string;
  createdAt: string;
  slug: string;
}

const NewsTeaser: React.FC<NewsTeaserProps> = ({
  title,
  slug,
  image,
  createdAt,
}) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 md:p-3">
      <Link href={`/news/${slug}`} passHref legacyBehavior>
        <a className="block group h-full">
          <article className="bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 group-hover:shadow-elevated group-hover:-translate-y-1 h-full flex flex-col">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              <ImageWrapper
                image={image}
                layout="fill"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              {/* Date */}
              <time className="text-sm text-neutral-500 font-medium">
                {format(new Date(createdAt), "MMM d, yyyy")}
              </time>

              {/* Title */}
              <h3 className="mt-2 text-lg md:text-xl font-semibold text-neutral-900 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors">
                {title}
              </h3>

              {/* Read More Link */}
              <div className="mt-auto pt-4 flex items-center text-primary-600 text-sm font-medium">
                <span>Read article</span>
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </article>
        </a>
      </Link>
    </div>
  );
};

export default NewsTeaser;
