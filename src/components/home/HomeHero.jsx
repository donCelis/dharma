import Slide from '../common/Slide';
import Image from '../common/Image';

export default function HomeHero() {
  return (
    <section className='home_hero'>
      <div className='container mod_container'>
        <div className='row'>
          <aside className='col-12 col-md-6'>
            <article>
              <img className='hero_logo' width='180px' src='./images/dharma.svg' alt='Dharma Logo' />
              <h3 className='hero_title'>ENERGY HEALING FOR ALL</h3>
              <p className='hero_info'>
                We’ve built this platform so you can easily find and book alternative healing sessions with local &
                bilingual energy healers.
              </p>
              <a className='hero_app_store' href='#'>
                <img src='./images/app_store.svg' alt='Appstore' />
              </a>
              <Slide />
            </article>
          </aside>
          <aside className='col-12 col-md-6 d-md-block d-none'>
            <aside className='hero_phone'>
              <Image visibleByDefault width='320px' src='./images/phone/1@2x_c.webp' alt='iphone' />
            </aside>
          </aside>
        </div>
        <button className='scroll_down'>
          <small>SCROLL DOWN</small>
          <img src='./images/icon_down.svg' alt='icon down' />
        </button>
      </div>
    </section>
  );
}
