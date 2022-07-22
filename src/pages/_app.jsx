import 'bootstrap/scss/bootstrap.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'nprogress/nprogress.css';
import 'src/styles/globals.scss';

import Head from 'next/head';
import { AppProvider } from 'src/context';
import { Router } from 'next/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

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
