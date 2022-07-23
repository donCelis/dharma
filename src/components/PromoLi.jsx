import Image from './common/Image';

export default function PromoLi() {
  return (
    <section className='home_promo_li'>
      <div className='container mod_container'>
        <article className='article_mod'>
          <figure className='promo_logo_li'>
            <Image src='./images/dharma_promo.svg' alt='' />
          </figure>
          <h4>Find Healers Now!</h4>
          <figure className='app_store'>
            <Image src='./images/app_store_big.svg' alt='' />
          </figure>
        </article>
      </div>
    </section>
  );
}
