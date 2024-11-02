import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import BlockContentWrapper from '../../components/blockContentWrapper/blockContentWrapper'
import Container from '../../components/container/container'
import Grid from '../../components/grid/grid'
import Prose from '../../components/prose/prose'
import SanityPageService from '../../services/SanityPageService'
import AboutPage from '../../types/AboutPage'
import InvestmentsPage from '../../types/InvestmentsPage'

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
}`

const pageService = new SanityPageService<InvestmentsPage>(query)

const Investments: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (context) => {
  const { data } = pageService.getPreviewHook(context)()


  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="pt-8 flex">
        <Container>
          <div className="text-3xl md:text-6xl xl:text-7xl md:leading-tight font-semibold">
            {data.title}
          </div>
          <Prose large>
            <BlockContentWrapper text={data.description} />
          </Prose>
          <div className="w-full max-w-5xl">
            {data.investmentPerCategory.map((investment, i) => (
              <Grid
                items={investment.investments}
                key={`investment-grid-${i}`}
                title={investment.title}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Investments

export function getStaticProps(context) {
  return pageService.fetchQuery(context)
}