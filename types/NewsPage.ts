import { SanityDocument, Block } from '@sanity/types'
import DefaultImage from './DefaultImage'
import Investment from './Investment'

interface NewsPage extends SanityDocument {
  title: string,
  description: Block[],
  news: {
    title: string,
    subtitle: string,
    image: DefaultImage,
    href: string
  }[]
}

export default NewsPage