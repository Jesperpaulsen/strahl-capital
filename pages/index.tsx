import React from "react";
import { InferGetStaticPropsType } from "next";
import Container from "../components/container/container";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import SanityPageService from "../services/SanityPageService";
import HomePage from "../types/HomePage";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import BlockContentWrapper from "../components/blockContentWrapper/blockContentWrapper";
import Prose from "../components/prose/prose";
import Card from "../components/card/card";

const query = `*[_type == 'home'][0] {
  ...,
  "numberOfInvestments": count(*[_type == "investment"]),
  "investments": *[_type == "investment"] | order(_updatedAt desc),
  "news": *[_type == "newsArticle"] | order(_createdAt desc) [0 ... 4] {
    ...,
    "href": slug.current
  }
}`;

const pageService = new SanityPageService<HomePage>(query);

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { data } = pageService.getPreviewHook(context)();

  const randomInvestmentStart = Math.floor(
    Math.random() * (data.numberOfInvestments - 5)
  );
  const investmentsToShow = data.investments.slice(
    randomInvestmentStart,
    randomInvestmentStart + 5
  );

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="block lg:hidden">
        <div className="w-full">
          <div className="text-3xl md:text-5xl text-center w-full pt-4">
            {data.title}
          </div>
          <div className="h-52 m-auto relative">
            <ImageWrapper image={data.heroImage} layout="fill" />
          </div>
          <Container>
            <div className="text-xl font-light text-center">
              <BlockContentWrapper text={data.subTitle} />
            </div>
          </Container>
        </div>
      </div>
      <Container bleedMobile>
        <div className="hidden lg:block">
          <div className="flex w-full h-4/6 md:justify-between items-center flex-wrap py-32">
            <div className="w-5/12">
              <div className="text-3xl md:text-6xl xl:text-7xl md:leading-tight font-semibold text-center md:text-left">
                {data.title}
              </div>
              <div className="md:text-2xl lg:text-3xl pt-2 md:pt-4 font-light">
                <BlockContentWrapper text={data.subTitle} />
              </div>
            </div>
            <div className="w-1/2 py-3 md:py-0">
              <ImageWrapper image={data.heroImage} />
            </div>
          </div>
        </div>
      </Container>
      <div className="flex justify-center px-6 md:px-0">
        <Prose>
          <BlockContentWrapper text={data.body} />
        </Prose>
      </div>
      <Container>
        <div>
          <div className="text-2xl md:text-3xl py-4">Latest news</div>
          <div className="flex flex-wrap justify-start">
            {data.news.map((news) => (
              <div className="px-0 pr-2 md:pr-5 py-2" key={news.title}>
                <Card
                  large
                  href={news.href}
                  image={news.image}
                  title={news.title}
                  slugPrefix="/news"
                  subtitle={news.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <div className="text-2xl md:text-3xl py-4">
            Some of our investments
          </div>
          <div className="flex flex-wrap justify-start">
            {investmentsToShow.map((investement) => (
              <div className="pr-4 pt-4" key={investement.title}>
                <Card
                  href={investement.url}
                  image={investement.logo}
                  title={investement.title}
                  subtitle={investement.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Index;

export function getStaticProps(context: { params?: any; preview?: boolean }) {
  return pageService.fetchQuery(context);
}
