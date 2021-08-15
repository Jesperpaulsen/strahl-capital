import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Container from '../components/container/container'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import SanityPageService from '../services/SanityPageService'
import HomePage from '../types/HomePage'
import ImageWrapper from '../components/imageWrapper/imageWrapper'
import BlockContentWrapper from '../components/blockContentWrapper/blockContentWrapper'
import Prose from '../components/prose/prose'

const query = `*[_type == 'home'][0]`

const pageService = new SanityPageService<HomePage>(query)

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (context) => {

  const { data } = pageService.getPreviewHook(context)()

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="block lg:hidden">
        <div className="relative w-screen">
          <ImageWrapper image={data.heroImage} />
          <div className="bg-gradient-to-t from-gray-900 top-0 w-full h-full absolute"/>
          <div className="text-3xl md:text-5xl text-center text-gray-200 absolute top-1/2 w-full px-2">
              {data.title}
          </div>
        </div>
      </div>
      <Container bleedMobile>
      <div className="hidden lg:block h-screen">
        <div className="flex w-full h-5/6 md:justify-between items-center flex-wrap">
          <div className="w-5/12">
            <div className="text-3xl md:text-6xl xl:text-7xl md:leading-tight font-semibold text-center md:text-left">
              {data.title}
            </div>
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
      <div className="flex justify-center">
        <Prose>
          <BlockContentWrapper text={data.body} />
        </Prose>
      </div>
    </>
  )
}

export default Index

export function getStaticProps(context: { params?: any; preview?: boolean }) {
  return pageService.fetchQuery(context)
}
