import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

import Head from 'next/head';
import { AppProvider } from 'src/context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
