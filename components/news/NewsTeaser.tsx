import Link from "next/link"
import DefaultImage from "../../types/DefaultImage"
import ImageWrapper from "../imageWrapper/imageWrapper"
import { format } from 'date-fns'

interface NewsTeaserProps {
  image: DefaultImage
  title: string
  createdAt: string
  slug: string
}


const NewsTeaser: React.FC<NewsTeaserProps> = ({ title, slug, image, createdAt }) => {
  return <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:pr-5 mb-5">
    <Link href={`/news/${slug}`} passHref>
      <a className="block w-full rounded-md shadow-sm bg-white dark:bg-black focus:outline-none group transition ease-in-out duration-300 hover:shadow-lg focus:shadow-lg">
        <div className="overflow-hidden rounded-t-md">
          <div className="w-full h-64 md:h-96 relative">
            <ImageWrapper 
              image={image}
              layout="fill"
              //objectFit="cover"
            />
          </div>
        </div>

        <div className="px-4 py-3 md:px-6">
          <div className="pb-2 pt-1 text-gray-700 text-sm">
            {format(new Date(createdAt), "dd MMM yyyy")}
          </div>
          <div className="md:pb-4 uppercase block text-heading-md lg:text-heading-lg font-medium w-11/12 text-gray-800">
          {title}
          </div>
        </div>
      </a>
    </Link>
  </div>
}

export default NewsTeaser