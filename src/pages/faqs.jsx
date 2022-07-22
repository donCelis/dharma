import Link from 'next/link';
import Image from 'src/components/common/Image';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from '../components/Page';

export default function Faqs() {
  const data_head = {
    title: 'FAQS',
    description: 'Texto de prueba',
  };
  return (
    <Page {...data_head}>
      <Header>
        <Link href='/'>
          <a className='icon_back'>
            <Image src='./images/icon_back.svg' alt='' />
          </a>
        </Link>
        <figure className='app_store app_store_min'>
          <Image src='./images/app_store_big.svg' alt='' />
        </figure>
      </Header>
      <section className='faqs'>
        <div className='container'>
          <h4>Frequently Asked Questions</h4>
          <p>Faqs</p>
        </div>
      </section>
      <Footer />
    </Page>
  );
}
