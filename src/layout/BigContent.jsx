import Link from 'next/link';
import PromoLi from 'src/components/PromoLi';
import Page from './Page';

export default function BigContent({ children, data_head }) {
  return (
    <Page {...data_head}>
      <header style={{ padding: '1.2rem 0' }} className='d-flex align-items-center justify-content-between container'>
        <Link href='/'>
          <a className='icon_back'>
            <img src='./images/icon_back_b.svg' alt='' />
          </a>
        </Link>
        <a href='#'>
          <figure className='app_store app_store_min'>
            <img src='./images/app_store_big.svg' alt='' />
          </figure>
        </a>
      </header>
      <section className='container text-center'>
        <img width='150px' src='./images/dharma.svg' alt='' />
      </section>
      <section className='container py-4'>
        <h2 className='my-4'>
          <u>{data_head.title}</u>
        </h2>
        {children}
      </section>
      <PromoLi />
    </Page>
  );
}
