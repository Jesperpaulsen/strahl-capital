import sanity from './sanity'

export interface BaseDataType {
  preview: boolean
  slug?: string
  body?: any
}

interface SanityPageServiceOptions {
  injectBody?: boolean
  injectHero?: boolean
  bodyQueryPartsToOverride?: { [queryPart: string]: { query: string } }
}
export default class SanityPageService<T> {
  query = ''

  constructor (query: string) {
    this.query = query
  }

  getPreviewHook (initialData: T & BaseDataType, params = {}) {
    const subscription = { initialData, enabled: initialData.preview, params: { slug: '' } as { slug?: string } }
    subscription.params = params
    if (initialData.slug?.length > 0) subscription.params.slug = initialData.slug
    return () => sanity.usePreviewSubscription<T>(this.query, subscription)
  }

  async fetchQuery ({ params, preview = false }: { params?: any, preview?: boolean }): Promise<{ props: T & BaseDataType, notFound: boolean }> {
    sanity.setPreviewMode(preview)
    const slug = params?.slug
    const res = await sanity.fetchQuery({ query: this.query, params })
    const notFound = !res
    const props = res || {}

    props.preview = preview
    if (slug?.length > 0) props.slug = slug
    return { props, notFound }
  }

  fetchPaths (schemaType) {
    const query = `*[_type == "${schemaType}" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
    return sanity.fetchQuery({ query, params: {} })
  }
}

function injectQuery (originalQuery: string, queryToInject: string) {
  const injectIdx = originalQuery.length - 1
  if (injectIdx <= 1 || originalQuery[injectIdx] !== '}') throw new Error(`Something went wrong when injecting query ${queryToInject} into ${originalQuery}`)
  if (originalQuery[injectIdx - 2] === ',') throw new Error(`Don't add trailing comma to the last element in the query when using inject body. Query with trailing comma is ${originalQuery}`)
  return `${originalQuery.substr(0, injectIdx - 1)}${queryToInject}
}`
}