import "../content/base/style/index.scss";
import Layout from '../content/templates/layout/index'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
