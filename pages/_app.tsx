import React from "react";
import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";

function StrahlCapital({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="image"
          property="og:image"
          content="https://www.strahl.no/logo.png"
        />
      </Head>
      <DefaultSeo
        title="Strahl Capital"
        description="Fuel for impact.
        There is no lack of important challenges to solve.
        We support teams seeking to make a positive impact for the benefit of people and the planet."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.strahl.no/",
          site_name: "Strahl Capital",
          images: [{ url: "/logo.png" }],
          description: `Fuel for impact.
          There is no lack of important challenges to solve.
          We support teams seeking to make a positive impact for the benefit of people and the planet.`,
        }}
      />
      <Layout preview={pageProps.preview}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default StrahlCapital;
