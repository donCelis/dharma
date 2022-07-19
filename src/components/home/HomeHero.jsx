import Image from '../Image';

export default function HomeHero() {
  return (
    <section className='home_hero'>
      <div className='container mod_container'>
        <div className='row'>
          <aside className='col-12 col-md-6'>
            <article>
              <Image className='hero_logo' width='160px' src='./images/dharma.svg' alt='Dharma Logo' />
              <h3 className='hero_title'>ENERGY HEALING FOR ALL</h3>
              <p className='hero_info'>
                We’ve built this platform so you can easily find and book alternative healing sessions with local &
                bilingual energy healers.
              </p>
              <Image className='hero_app_store' width='120px' src='./images/app_store.svg' alt='Appstore' />
              <div className='hero_slider' />
            </article>
          </aside>
          <aside className='col-12 col-md-6 d-md-block d-none'>
            <aside className='hero_phone'>
              <Image width='300px' src='./images/phone/1.png' alt='iphone' />
            </aside>
          </aside>
        </div>
        <button className='scroll_down'>
          <small>SCROLL DOWN</small>
          <Image src='./images/icon_down.svg' alt='icon down' />
        </button>
      </div>
    </section>
  );
}
