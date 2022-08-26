import React, { useEffect, useMemo, useState } from "react";
import { InferGetStaticPropsType } from "next";
import Container from "../components/container/container";
import Head from "next/head";
import SanityPageService from "../services/SanityPageService";
import HomePage from "../types/HomePage";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import BlockContentWrapper from "../components/blockContentWrapper/blockContentWrapper";
import Prose from "../components/prose/prose";
import Card from "../components/card/card";
import NewsTeaser from "../components/news/NewsTeaser";

const query = `*[_type == 'home'][0] {
  ...,
  "investments": *[_type == "investment"],
  "news": *[_type == "newsArticle"] | order(_createdAt desc) [0 ... 4] {
    ...,
    "createdAt": _createdAt,
    "href": slug.current
  }
}`;

const pageService = new SanityPageService<HomePage>(query);

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { data } = pageService.getPreviewHook(context)();

  const [isMounted, setIsMounted] = useState(false)

  const investmentsToShow = useMemo(() => { 
    const randomInvestmentStart = Math.floor(
      Math.random() * (data.investments.length - 5)
    );

    const slicedInvestements = data.investments.slice(randomInvestmentStart, randomInvestmentStart + 5)

    return slicedInvestements || []

  }, [data.investments])

  useEffect(() => {
    setIsMounted(true)
  }, [investmentsToShow])


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
          <div className="h-52 relative mt-3">
            <ImageWrapper image={data.heroImage} layout="fill" objectFit="cover" />
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
          <div className="text-2xl md:text-3xl py-4 ml-4 md:ml-0">Latest news</div>
          <div className="flex justify-start flex-wrap">
            {data.news.map((news, i) => (
              <NewsTeaser
                key={news.title}
                image={news.image}
                slug={news.href}
                title={news.title}
                createdAt={news.createdAt}
              />
            ))}
          </div>
        </Container>
        <Container bleedMobile>
        <div className="py-8">
          <div className="text-2xl md:text-3xl py-4 ml-4 md:ml-0">
            Some of our investments
          </div>
          {isMounted && <div className="flex md:flex-wrap overflow-x-auto justify-start">
            {investmentsToShow.map((investement, i) => (
              <div
                className={`pr-4 pt-4 ${i === 0 ? "ml-4 md:ml-0" : ""}`}
                key={investement._id}
              >
                <Card
                  noPadding={investement.logoShouldTakeFullWidth}
                  href={investement.url}
                  image={investement.logo}
                  title={investement.title}
                  subtitle=""
                />
              </div>
            ))}
          </div>}
        </div>
      </Container>
    </>
  );
};

export default Index;

export function getStaticProps(context: { params?: any; preview?: boolean }) {
  return pageService.fetchQuery(context);
}
