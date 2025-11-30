import React from "react";
import { InferGetStaticPropsType } from "next";
import Container from "../../components/container/container";
import Head from "next/head";
import SanityPageService from "../../services/SanityPageService";
import ImageWrapper from "../../components/imageWrapper/imageWrapper";
import BlockContentWrapper from "../../components/blockContentWrapper/blockContentWrapper";
import Prose from "../../components/prose/prose";
import NewsArticleType from "../../types/NewsArticle";
import Link from "next/link";

const query = "*[_type == 'newsArticle' && slug.current == $slug][0]";

const pageService = new SanityPageService<NewsArticleType>(query);

const NewsArticle: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { data } = pageService.getPreviewHook(context)();

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{data.title} | Strahl Capital</title>
      </Head>

      {/* Hero Image */}
      {data.image?.asset && (
        <div className="relative h-64 md:h-96 lg:h-[500px] bg-neutral-100">
          <ImageWrapper
            image={data.image}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      {/* Article Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <Container>
          {/* Back Link */}
          <Link
            href="/news"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to News
          </Link>

          {/* Article Header */}
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              {data.title}
            </h1>
          </header>

          {/* Article Body */}
          <article className="max-w-3xl mx-auto">
            <Prose large>
              <BlockContentWrapper text={data.description} />
            </Prose>
          </article>

          {/* Footer */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-neutral-200">
            <Link
              href="/news"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to all news
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NewsArticle;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths("newsArticle");
  return {
    paths,
    fallback: true,
  };
}
