import '../styles/globals.scss';

import {ProductsProvider} from '../context/ProductsContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </ProductsProvider>
  )
}

export default MyApp
