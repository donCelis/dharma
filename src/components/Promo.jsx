import Image from './common/Image';

export default function Promo() {
  return (
    <section className='home_promo'>
      <div className='container mod_container'>
        <article className='home_promo_info'>
          <figure className='promo_logo'>
            <Image src='./images/dharma_promo.svg' alt='' />
          </figure>
          <h3>Find Healers Now!</h3>
          <figure className='app_store'>
            <Image src='./images/app_store_big.svg' alt='' />
          </figure>
          <p>
            Download today and receive 20% <br /> off your first booked session
          </p>
        </article>
      </div>
    </section>
  );
}
