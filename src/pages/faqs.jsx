import Link from 'next/link';
import Page from '../components/Page';

export default function Faqs() {
  const data_head = {
    title: 'FAQS',
    description: 'Texto de prueba',
  };
  return (
    <Page {...data_head}>
      <section className='container'>
        <Link href='/'>atras</Link>
        <p>Faqs</p>
      </section>
    </Page>
  );
}
