import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlockContentWrapper from "../components/blockContentWrapper/blockContentWrapper";
import ContactForm from "../components/contactForm";
import Container from "../components/container/container";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import Input from "../components/input/input";
import Prose from "../components/prose/prose";
import SanityPageService from "../services/SanityPageService";
import ContactPage from "../types/ContactPage";

const query = `*[_type == 'contact'][0]`;

const pageService = new SanityPageService<ContactPage>(query);

const Contact: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { data } = pageService.getPreviewHook(context)();
  return (
    <>
      <Head>
        <title>{data.title} | Strahl Capital</title>
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
          <ContactForm />
        </div>
      </div>
      <Container bleedMobile>
        <div className="hidden lg:block">
          <div className="flex w-full h-4/6 md:justify-between items-center flex-wrap py-32">
            <div className="w-5/12">
              <div className="text-3xl md:text-6xl xl:text-7xl md:leading-tight font-semibold text-center md:text-left">
                {data.title}
              </div>
              <ContactForm />
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
      <Container>
        <div className="flex justify-center pt-5">
          <Prose>
            <BlockContentWrapper text={data.body} />
          </Prose>
        </div>
      </Container>
    </>
  );
};

export default Contact;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
