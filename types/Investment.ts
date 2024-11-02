import { Block, SanityDocument, Slug } from '@sanity/types'
import DefaultImage from './DefaultImage';
import InvestmentCategory from './InvestmentCategory';
import Location from './Location';

export default interface Investment extends SanityDocument {
  title: string,
  slug: Slug,
  logo: DefaultImage,
  logoShouldTakeFullWidth: boolean,
  url: string,
  location: Location,
  category: InvestmentCategory,
  shortDescription: Block[],
  description: Block[]
  exitDate: string,
}