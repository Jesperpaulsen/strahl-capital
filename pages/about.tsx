import React from "react";
import { InferGetStaticPropsType } from "next";
import Container from "../components/container/container";
import Head from "next/head";
import SanityPageService from "../services/SanityPageService";
import BlockContentWrapper from "../components/blockContentWrapper/blockContentWrapper";
import AboutPage from "../types/AboutPage";
import Prose from "../components/prose/prose";

const query = `*[_type == 'about'][0]`;

const pageService = new SanityPageService<AboutPage>(query);

const About: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
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
          <div className="py-16 md:py-24 lg:py-32 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight max-w-4xl mx-auto">
              {data.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Prose large>
              <BlockContentWrapper text={data.body} />
            </Prose>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
