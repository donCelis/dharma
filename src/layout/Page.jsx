import Head from 'next/head';
import MenuOpen from 'src/components/common/MenuOpen';
import ContactUs from 'src/components/ContactUs';
import { useAppContext } from 'src/context';
import Footer from '../components/Footer';

function Page({ title, description, children }) {
  const { isOpenContact } = useAppContext();
  return (
    <>
      <Head>
        <title>{title} | Dharma App</title>
        <meta name='title' content='' />
        <meta name='description' content={description} />
        <meta name='keywords' content='' />

        <meta name='twitter:card' content='summary_large_image' />

        <meta name='twitter:title' content='Title of your page' />
        <meta name='twitter:description' content='Your description here' />

        <meta property='og:type' content='website' />

        <meta property='og:title' content='ENTER PAGE TITLE' />
        <meta property='og:description' content='ENTER YOUR PAGE DESCRIPTION' />
      </Head>
      <MenuOpen isVisible={isOpenContact}>
        <ContactUs />
      </MenuOpen>
      {children}
      <Footer />
    </>
  );
}

Page.defaultProps = {
  title: 'Dharma -  Website',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dicta.',
};

export default Page;
