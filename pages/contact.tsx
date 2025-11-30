import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import BlockContentWrapper from "../components/blockContentWrapper/blockContentWrapper";
import ContactForm from "../components/contactForm";
import Container from "../components/container/container";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-neutral-50" />
        <Container className="relative">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content & Form */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                  {data.title}
                </h1>
                <div className="mt-4 text-lg md:text-xl text-neutral-600 leading-relaxed">
                  <BlockContentWrapper text={data.subTitle} />
                </div>

                {/* Contact Form */}
                <div className="mt-10">
                  <ContactForm />
                </div>
              </div>

              {/* Hero Image */}
              <div className="hidden lg:block">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated">
                  <ImageWrapper
                    image={data.heroImage}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile Image */}
      <div className="lg:hidden">
        <div className="relative h-64 md:h-80">
          <ImageWrapper
            image={data.heroImage}
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>

      {/* Additional Content */}
      {data.body && (
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Prose>
                <BlockContentWrapper text={data.body} />
              </Prose>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default Contact;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
