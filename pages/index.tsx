import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import SanityPageService from '../services/SanityPageService'
import HomePage from '../types/HomePage'

const query = `*[_type == 'home'][0]`

const pageService = new SanityPageService<HomePage>(query)

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (context) => {

  const { data } = pageService.getPreviewHook(context)()

  const { preview } = data

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <div>
          {data.title}
        </div>
        <Container>
          <div>

          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export function getStaticProps(context) {
  return pageService.fetchQuery(context)
}
