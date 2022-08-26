import { SanityDocument, Block } from '@sanity/types'
import DefaultImage from './DefaultImage'
import Investment from './Investment'

interface InvestmentsPage extends SanityDocument {
  title: string,
  description: Block[],
  investmentPerCategory: {
    title: string,
    investments: { 
      title: string,
      subtitle: string,
      image: DefaultImage,
      href: string
      noPadding: boolean
    }[]
  }[]
}

export default InvestmentsPage