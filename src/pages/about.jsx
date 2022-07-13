import Page from '../components/Page';

export default function About() {
  const data_head = {
    title: 'About',
    description: 'Texto de prueba',
  };
  return (
    <Page {...data_head}>
      <section className='container'>
        <p>About</p>
      </section>
    </Page>
  );
}
