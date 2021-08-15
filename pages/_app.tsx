import Layout from '../components/layout/layout'
import '../styles/index.css'

function StrahlCapital({ Component, pageProps }) {
  return (
    <Layout preview={pageProps.preview}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default StrahlCapital
