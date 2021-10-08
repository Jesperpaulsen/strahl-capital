import { SanityDocument, Block } from "@sanity/types";
import DefaultImage from "./DefaultImage";

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
  }[];
  numberOfInvestments: number;
  investments: {
    title: string;
    subtitle: string;
    logo: DefaultImage;
    url: string;
  }[];
}

export default HomePage;
