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
      </Head>
      <DefaultSeo
        title="Strahl Capital"
        description="Fuel for impact"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.strahl.no/",
          site_name: "Strahl Capital",
          images: [{ url: "/strahl.png" }],
        }}
      />
      <Layout preview={pageProps.preview}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default StrahlCapital;
