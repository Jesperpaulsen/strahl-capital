import { SanityDocument } from "@sanity/types";
import DefaultImage from "./DefaultImage";

export default interface InvestmentCategory extends SanityDocument {
  title: string,
  image: DefaultImage
}