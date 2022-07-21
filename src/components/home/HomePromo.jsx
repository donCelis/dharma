import Image from '../common/Image';

export default function HomePromo() {
  return (
    <section className='home_promo'>
      <div className='container mod_container'>
        <article className='home_promo_info'>
          <figure className='m-0'>
            <Image className='logo_promo' src='./images/dharma_promo.svg' alt='' />
          </figure>
          <h3>Find Healers Now!</h3>
          <Image className='app_store' src='./images/app_store_big.svg' alt='' />
          <p>
            Download today and receive 20% <br /> off your first booked session
          </p>
        </article>
      </div>
    </section>
  );
}
