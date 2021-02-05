import "../content/base/style/index.scss";
import Layout from '../content/templates/layout/index'
import { NavigationToggle } from "../utils/state_management/store/nav-context";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavigationToggle>
    <Layout>
      <Component {...pageProps} />
      </Layout></NavigationToggle>
    </>
  );
}

export default MyApp;
