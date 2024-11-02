import { InferGetStaticPropsType } from "next"
import SanityPageService from "../services/SanityPageService"
import ExitsPage, { Exit } from "../types/ExitPage"
import Head from "next/head"
import BlockContentWrapper from "../components/blockContentWrapper/blockContentWrapper"
import Container from "../components/container/container"
import Grid from "../components/grid/grid"
import Prose from "../components/prose/prose"
import { useMemo } from "react"

const query = `*[_type == "exits"][0] {
  ...,
  "exits": *[_type == "investment" && defined(exitDate)] | order(year desc) {
    exitDate,
    "year": string::split(exitDate, "-")[0],
		title,
    "subtitle": location->title,
    "image": logo,
    "href": url,
    "noPadding": logoShouldTakeFullWidth
  }
}`

const pageService = new SanityPageService<ExitsPage>(query)

const Exits: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (context) => {
  const { data } = pageService.getPreviewHook(context)()

  const exitsGroupedByYear = useMemo(() => data.exits.reduce<Record<string, Exit[]>>((acc, exit) => {
    if (!acc[exit.year]) {
      acc[exit.year] = []
    }
    acc[exit.year].push(exit)
    return acc
  }, {}), [data.exits])

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
            {Object.entries(exitsGroupedByYear).map(([year, exits], i) => (
              <Grid
              key={`exit-grid-${i}`} 
              title={year}
              items={exits}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Exits

export function getStaticProps(context) {
  return pageService.fetchQuery(context)
}