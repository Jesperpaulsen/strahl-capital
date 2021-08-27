import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Container from '../components/container/container'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import SanityPageService from '../services/SanityPageService'
import ImageWrapper from '../components/imageWrapper/imageWrapper'
import BlockContentWrapper from '../components/blockContentWrapper/blockContentWrapper'
import AboutPage from '../types/AboutPage'
import Prose from '../components/prose/prose'

const query = `*[_type == 'about'][0]`

const pageService = new SanityPageService<AboutPage>(query)

const About: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (context) => {

  const { data } = pageService.getPreviewHook(context)()

  return (
    <>
      <Head>
        <title>{data.title} | Strahl Capital</title>
      </Head>
      <div className="relative">
        <ImageWrapper image={data.heroImage} height={500} />
        <div className="bg-gradient-to-t from-gray-900 top-0 w-full h-full absolute"/>
        <div className="top-1/2 absolute w-full z-10">
          <div className="w-full flex justify-center">
            <div className="text-1xl md:text-5xl xl:text-6xl md:leading-tight max-w-4xl text-center font-semibold text-gray-200">
                {data.title}
              </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="flex justify-center pt-5">
          <Prose>
            <BlockContentWrapper text={data.body} />
          </Prose>
        </div>
      </Container>
    </>
  )
}

export default About

export function getStaticProps(context) {
  return pageService.fetchQuery(context)
}
