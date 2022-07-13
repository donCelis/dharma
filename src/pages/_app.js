import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

import Head from 'next/head';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  return {
    ...appProps,
  };
};
