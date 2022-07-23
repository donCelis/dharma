import Link from 'next/link';
import Image from 'src/components/common/Image';
import PromoLi from 'src/components/PromoLi';
import Page from './Page';

export default function BigContent({ children, data_head }) {
  return (
    <Page {...data_head}>
      <header style={{ padding: '1.2rem 0' }} className='d-flex align-items-center justify-content-between container'>
        <Link href='/'>
          <a className='icon_back'>
            <Image visibleByDefault src='./images/icon_back_b.svg' alt='' />
          </a>
        </Link>
        <figure className='app_store app_store_min'>
          <Image src='./images/app_store_big.svg' alt='' />
        </figure>
      </header>
      <section className='container text-center'>
        <Image width='150px' src='./images/dharma.svg' alt='' />
      </section>
      <section className='container py-4'>
        <h2>
          <u>{data_head.title}</u>
        </h2>
        {children}
      </section>
      <PromoLi />
    </Page>
  );
}
