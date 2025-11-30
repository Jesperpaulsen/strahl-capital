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
import Link from "next/link";

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

  const [isMounted, setIsMounted] = useState(false);

  const investmentsToShow = useMemo(() => {
    const randomInvestmentStart = Math.floor(
      Math.random() * (data.investments.length - 5)
    );

    const slicedInvestements = data.investments.slice(
      randomInvestmentStart,
      randomInvestmentStart + 5
    );

    return slicedInvestements || [];
  }, [data.investments]);

  useEffect(() => {
    setIsMounted(true);
  }, [investmentsToShow]);

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-neutral-50" />

        <Container className="relative">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
                  {data.title}
                </h1>
                <div className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
                  <BlockContentWrapper text={data.subTitle} />
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/investments"
                    className="btn-primary"
                  >
                    Our Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <ImageWrapper
                    image={data.heroImage}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Prose>
              <BlockContentWrapper text={data.body} />
            </Prose>
          </div>
        </Container>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Latest News
              </h2>
              <p className="mt-2 text-neutral-600">
                Updates from our portfolio and team
              </p>
            </div>
            <Link
              href="/news"
              className="mt-4 md:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              View all news
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
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

      {/* Investments Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Featured Investments
              </h2>
              <p className="mt-2 text-neutral-600">
                Some of the companies we partner with
              </p>
            </div>
            <Link
              href="/investments"
              className="mt-4 md:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              View all investments
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          {isMounted && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {investmentsToShow.map((investment) => (
                <Card
                  key={investment._id}
                  href={investment.url}
                  image={investment.logo}
                  title={investment.title}
                  subtitle=""
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Partner With Us?
            </h2>
            <p className="mt-4 text-lg text-primary-200">
              We&apos;re always looking for innovative companies making a positive
              impact. Let&apos;s start a conversation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-900 bg-white rounded-xl shadow-soft hover:bg-primary-50 transition-all duration-200"
            >
              Contact Us
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Index;

export function getStaticProps(context: { params?: any; preview?: boolean }) {
  return pageService.fetchQuery(context);
}
