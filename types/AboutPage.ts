import { Block } from "@sanity/types";
import DefaultImage from "./DefaultImage";

import { SanityDocument } from "@sanity/types";

export default interface AboutPage extends SanityDocument {
  title: string,
  heroImage: DefaultImage
  imageText: string,
  body: Block[]
}