import Head from 'next/head';

function Page({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='./images/favicon.ico' />
      </Head>
      {children}
    </>
  );
}

Page.defaultProps = {
  title: 'Dharma -  Website',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dicta.',
};

export default Page;
