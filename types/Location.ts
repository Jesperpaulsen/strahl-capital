import { SanityDocument } from "@sanity/types"
import DefaultImage from "./DefaultImage";

export default interface Location extends SanityDocument {
  title: string,
  image: DefaultImage
}