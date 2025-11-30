import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import BlockContentWrapper from "../../components/blockContentWrapper/blockContentWrapper";
import Container from "../../components/container/container";
import NewsTeaser from "../../components/news/NewsTeaser";
import Prose from "../../components/prose/prose";
import SanityPageService from "../../services/SanityPageService";
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
        <title>{data.title} | Strahl Capital</title>
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-neutral-50" />
        <Container className="relative">
          <div className="py-16 md:py-24 lg:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              {data.title}
            </h1>
            <div className="mt-6 max-w-2xl">
              <Prose large>
                <BlockContentWrapper text={data.description} />
              </Prose>
            </div>
          </div>
        </Container>
      </section>

      {/* News Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="flex flex-wrap -mx-2 md:-mx-3">
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
        </Container>
      </section>
    </>
  );
};

export default News;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
