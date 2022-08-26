import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useState } from "react";
import BlockContentWrapper from "../../components/blockContentWrapper/blockContentWrapper";
import Container from "../../components/container/container";
import Grid from "../../components/grid/grid";
import NewsTeaser from "../../components/news/NewsTeaser";
import Prose from "../../components/prose/prose";
import SanityPageService from "../../services/SanityPageService";
import AboutPage from "../../types/AboutPage";
import InvestmentsPage from "../../types/InvestmentsPage";
import NewsPage from "../../types/NewsPage";

const query = `*[_type == "news"][0] {
  title,
  description,
  "news": *[_type == "newsArticle"] | order(_createdAt desc) {
    title,
    "createdAt": _createdAt,
    image,
    "href": slug.current
  }
}`;

const pageService = new SanityPageService<NewsPage>(query);

const News: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { data } = pageService.getPreviewHook(context)();

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
        <div className="w-full px-5 md:px-12">
          <div className="pt-8">
          <div className="text-3xl md:text-6xl xl:text-7xl md:leading-tight font-semibold">
            {data.title}
          </div>
          <Prose large>
            <BlockContentWrapper text={data.description} />
          </Prose>
          <div className="flex justify-start flex-wrap">
            {data.news.map((news) => (
              <NewsTeaser
                key={news.title}
                image={news.image}
                slug={news.href}
                title={news.title}
                createdAt={news.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
