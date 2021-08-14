import { Block, SanityDocument, Slug } from "@sanity/types";
import DefaultImage from "./DefaultImage";

export default interface NewsArticle extends SanityDocument{
  title: string,
  slug: Slug,
  image: DefaultImage,
  shortDescription: Block[],
  description: Block[]
}