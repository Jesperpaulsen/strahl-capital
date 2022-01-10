import { Block } from "@sanity/types";

import { SanityDocument } from "@sanity/types";
import DefaultImage from "./DefaultImage";

export default interface ContactPage extends SanityDocument {
  title: string;
  heroImage: DefaultImage;
  subTitle: Block[];
  body: Block[];
}
