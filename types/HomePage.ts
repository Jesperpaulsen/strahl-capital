import { SanityDocument, Block } from '@sanity/types'
import DefaultImage from './DefaultImage';

interface HomePage extends SanityDocument {
  title: string,
  heroImage: DefaultImage
  subTitle: Block[],
  body: Block[]
}

export default HomePage