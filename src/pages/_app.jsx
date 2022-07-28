import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'nprogress/nprogress.css';
import 'src/styles/globals.scss';

import Head from 'next/head';
import { AppProvider } from 'src/context';
import { Router } from 'next/router';
import { done, start } from 'nprogress';

import Favicons from 'src/components/common/Favicons';
import MinMotion from 'src/components/common/MinMotion';
import { AnimatePresence, m } from 'framer-motion';

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
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='language' content='english' />
        <meta name='author' content='Dharma Team' />
        <meta name='copyright' content='DHARMA app - Protect Your Energy' />

        <meta name='twitter:url' content='https://mydharma.app/' />
        <meta name='twitter:image' content='./images/cover_c.jpg' />

        <meta property='og:url' content='https://mydharma.app/' />
        <meta property='og:image' content='./images/cover_c.jpg' />

        <meta
          name='description'
          content='Find Bilingual Energy Healers in Medellin today —> Sound Healing, Reiki Therapy, and much more.. Session are safe and offered ~in-studio ~at- home or ~virtually …'
        />
        <meta
          name='twitter:description'
          content='Find Bilingual Energy Healers in Medellin today —> Sound Healing, Reiki Therapy, and much more.. Session are safe and offered ~in-studio ~at- home or ~virtually …'
        />
        <meta
          property='og:description'
          content='Find Bilingual Energy Healers in Medellin today —> Sound Healing, Reiki Therapy, and much more.. Session are safe and offered ~in-studio ~at- home or ~virtually …'
        />

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
