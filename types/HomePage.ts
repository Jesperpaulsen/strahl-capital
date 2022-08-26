import { SanityDocument, Block } from "@sanity/types";
import DefaultImage from "./DefaultImage";
import Investment from "./Investment";

interface HomePage extends SanityDocument {
  title: string;
  heroImage: DefaultImage;
  subTitle: Block[];
  body: Block[];
  news: {
    title: string;
    subtitle: string;
    image: DefaultImage;
    href: string;
    createdAt: string
  }[];
  investments: Investment[];
}

export default HomePage;
