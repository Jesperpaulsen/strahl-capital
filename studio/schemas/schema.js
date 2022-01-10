import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import about from "./pages/about";
import home from "./pages/home";
import investments from "./pages/investments";
import news from "./pages/news";
import contact from "./pages/contact";

import defaultImage from "./defaultImage";
import investment from "./investment";
import investmentCategory from "./investmentCategory";
import location from "./location";
import newsArticle from "./newsArticle";
import blockContent from "./blockContent";

const schemas = [
  about,
  home,
  investments,
  news,
  contact,
  defaultImage,
  investment,
  investmentCategory,
  location,
  newsArticle,
  blockContent,
];

export default createSchema({
  name: "default",
  types: schemaTypes.concat(schemas),
});
