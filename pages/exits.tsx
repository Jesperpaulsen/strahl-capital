import { InferGetStaticPropsType } from "next";
import SanityPageService from "../services/SanityPageService";
import ExitsPage, { Exit } from "../types/ExitPage";
import Head from "next/head";
import BlockContentWrapper from "../components/blockContentWrapper/blockContentWrapper";
import Container from "../components/container/container";
import Grid from "../components/grid/grid";
import Prose from "../components/prose/prose";
import { useMemo } from "react";

const query = `*[_type == "exits"][0] {
  ...,
  "exits": *[_type == "investment" && defined(exitDate)] | order(exitDate desc) {
    exitDate,
    "year": string::split(exitDate, "-")[0],
    title,
    "subtitle": location->title,
    "image": logo,
    "href": url,
    "noPadding": logoShouldTakeFullWidth
  }
}`;

const pageService = new SanityPageService<ExitsPage>(query);

const Exits: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { data } = pageService.getPreviewHook(context)();

  const exitsGroupedByYear = useMemo(
    () =>
      data.exits.reduce<Record<string, Exit[]>>((acc, exit) => {
        if (!acc[exit.year]) {
          acc[exit.year] = [];
        }
        acc[exit.year].push(exit);
        return acc;
      }, {}),
    [data.exits]
  );

  // Sort years in descending order
  const sortedYears = Object.keys(exitsGroupedByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              {data.title}
            </h1>
            <div className="mt-6 max-w-2xl">
              <Prose large>
                <BlockContentWrapper text={data.description} />
              </Prose>
            </div>
          </div>
        </Container>
      </section>

      {/* Exits Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-12">
            {sortedYears.map((year, i) => (
              <Grid
                key={`exit-grid-${i}`}
                title={year}
                items={exitsGroupedByYear[year]}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Exits;

export function getStaticProps(context) {
  return pageService.fetchQuery(context);
}
