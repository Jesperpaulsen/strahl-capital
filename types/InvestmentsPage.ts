import { SanityDocument, Block } from '@sanity/types'

interface InvestmentsPage extends SanityDocument {
  title: string,
  description: Block[]
}

export default InvestmentsPage