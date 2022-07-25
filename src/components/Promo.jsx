import { m } from 'framer-motion';
import MinMotion from './common/MinMotion';

export default function Promo() {
  return (
    <section className='home_promo'>
      <div className='container mod_container'>
        <article className='home_promo_info'>
          <MinMotion>
            <m.figure
              viewport={{ once: true, margin: '-50px' }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className='promo_logo'
            >
              <img src='./images/dharma_promo.svg' alt='' />
            </m.figure>
          </MinMotion>
          <h3>Find Healers Now!</h3>
          <div>
            <a className='app_store' href='#'>
              <img src='./images/app_store_big.svg' alt='' />
            </a>
          </div>
          <p>
            Download today and receive 20% <br /> off your first booked session
          </p>
        </article>
      </div>
    </section>
  );
}
