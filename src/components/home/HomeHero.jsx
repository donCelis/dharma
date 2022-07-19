import Image from '../Image';

export default function HomeHero() {
  return (
    <section className='home_hero'>
      <div className='container mod_container'>
        <div className='row'>
          <aside className='col-6'>
            <article>
              <Image className='hero_logo' width='160px' src='./images/dharma.svg' alt='Dharma Logo' />
              <h4 className='hero_title'>ENERGY HEALING FOR ALL</h4>
              <p className='hero_info'>
                We’ve built this platform so you can easily <br /> find and book alternative healing sessions <br />{' '}
                with local & bilingual energy healers.
              </p>
              <Image className='hero_app_store' width='120px' src='./images/app_store.svg' alt='Appstore' />
              <div className='hero_slider' />
            </article>
          </aside>
          <aside className='col-6'>
            <aside className='hero_phone'>
              <Image width='300px' src='./images/phone/1.png' alt='iphone' />
            </aside>
          </aside>
        </div>
        <button className='scroll_down'>
          <small>SCROLL DOWN</small>
          <span><img src='' alt='' /></span>
        </button>
      </div>
    </section>
  );
}
