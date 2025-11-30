import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import BlockContentWrapper from "../../components/blockContentWrapper/blockContentWrapper";
import Container from "../../components/container/container";
import Grid from "../../components/grid/grid";
import Prose from "../../components/prose/prose";
import SanityPageService from "../../services/SanityPageService";
import InvestmentsPage from "../../types/InvestmentsPage";

const query = `*[_type == "investments"][0] {
  ...,
  "investmentPerCategory": *[_type == "investmentCategory"] | order(_updatedAt desc) {
    ...,
    "investments": *[_type == "investment" && references(^._id) && !defined(exitDate)] | order(lower(title)) {
      title,
      "subtitle": location->title,
      "image": logo,
      "href": url,
      "noPadding": logoShouldTakeFullWidth
    }
  }
}`;

const pageService = new SanityPageService<InvestmentsPage>(query);

const Investments: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
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

      {/* Investments Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-12">
            {data.investmentPerCategory.map((category, i) => (
              <div key={`investment-grid-${i}`}>
                {category.investments.length > 0 && (
                  <Grid items={category.investments} title={category.title} />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Investments;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
