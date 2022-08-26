import React from "react";
import { InferGetStaticPropsType } from "next";
import Container from "../components/container/container";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import SanityPageService from "../services/SanityPageService";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
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
      <Container>
        <div className="flex justify-center pt-5">
          <div>
            <div className="text-md md:text-5xl xl:text-6xl max-w-4xl text-center font-semibold">
              {data.title}
            </div>
            <Prose>
              <BlockContentWrapper text={data.body} />
            </Prose>
            </div>
        </div>
      </Container>
    </>
  );
};

export default About;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
