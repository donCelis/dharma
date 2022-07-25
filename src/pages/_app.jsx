import 'bootstrap/scss/bootstrap.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'nprogress/nprogress.css';
import 'aos/dist/aos.css';
import 'src/styles/globals.scss';

import Head from 'next/head';
import { AppProvider } from 'src/context';
import { Router } from 'next/router';
import { done, start } from 'nprogress';

import Favicons from 'src/components/common/Favicons';
import MinMotion from 'src/components/common/MinMotion';
import { AnimatePresence, m } from 'framer-motion';
import { useEffect } from 'react';
import { init } from 'aos';

Router.events.on('routeChangeStart', () => start());
Router.events.on('routeChangeComplete', () => done());
Router.events.on('routeChangeError', () => done());

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    init({
      easing: 'ease-in-out-quad',
      once: true,
      mirror: true,
      anchorPlacement: 'bottom-center',
    });
  }, []);
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='language' content='' />
        <meta name='author' content='' />
        <meta name='copyright' content='' />
        <meta name='robots' content='' />

        <meta name='twitter:url' content='URL of your page' />
        <meta name='twitter:image' content='URL of image' />

        <meta property='og:url' content='ENTER PAGE URL' />
        <meta property='og:image' content='URL OF IMAGE' />

        <Favicons />
      </Head>
      <AppProvider>
        <AnimatePresence>
          <MinMotion>
            <m.main variants={variants} animate='animate' initial='initial' exit='initial' key={router.route}>
              <Component {...pageProps} />
            </m.main>
          </MinMotion>
        </AnimatePresence>
      </AppProvider>
    </>
  );
}

export default MyApp;
