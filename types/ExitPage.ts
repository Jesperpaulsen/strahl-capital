import { Block, SanityDocument } from "@sanity/types"
import DefaultImage from "./DefaultImage"

export interface Exit {
  year: string,
  title: string,
  subtitle: string,
  image: DefaultImage,
  href: string
  noPadding: boolean
  exitDate: string
}

interface ExitsPage extends SanityDocument {
  title: string,
  description: Block[],
  exits: Exit[]
}

export default ExitsPage