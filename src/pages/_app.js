import "../content/base/style/index.scss";
import Layout from "../content/templates/layout/index";
import { AuthProvider } from "../utils/state_management/global_context";
import { NavigationToggle } from "../utils/state_management/nav-context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationToggle>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </NavigationToggle>
    </>
  );
}

export default MyApp;
