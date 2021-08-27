import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/index.css'

function StrahlCapital({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout preview={pageProps.preview}>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default StrahlCapital
