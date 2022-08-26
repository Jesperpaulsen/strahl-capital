import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Container from '../../components/container/container'
import Head from 'next/head'
import SanityPageService from '../../services/SanityPageService'
import ImageWrapper from '../../components/imageWrapper/imageWrapper'
import BlockContentWrapper from '../../components/blockContentWrapper/blockContentWrapper'
import Prose from '../../components/prose/prose'
import NewsArticleType from '../../types/NewsArticle'

const query = "*[_type == 'newsArticle' && slug.current == $slug][0]"

const pageService = new SanityPageService<NewsArticleType>(query)

const NewsArticle: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (context) => {

  const { data } = pageService.getPreviewHook(context)()

  return (
    <>
      <Head>
        <title>{data.title} | Strahl Capital</title>
      </Head>
      <Container>
        {data.image?.asset && <div className="h-80 relative">
          <ImageWrapper image={data.image} layout="fill" className="px-6" />
        </div>}
        <div className="w-full flex justify-center pt-10">
          <div className="text-3xl md:text-5xl xl:text-6xl md:leading-tight max-w-4xl text-center font-semibold">
            {data.title}
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <Prose>
            <BlockContentWrapper text={data.description} />
          </Prose>
        </div>
      </Container>
    </>
  )
}

export default NewsArticle

export function getStaticProps(context) {
  return pageService.fetchQuery(context)
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('newsArticle')
  return {
    paths,
    fallback: true
  }
}