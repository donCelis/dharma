import Image from '../common/Image';

export default function HomeFeatures() {
  return (
    <section className='home_features'>
      <div className='container'>
        <h3 className='home_features_title'>
          <img src='./images/icon_sun.svg' alt='' />
          DHARMA FEATURES
        </h3>
        <div className='row gx-0 gx-lg-4 pt-5'>
          <aside className='col-12 col-sm-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>1</p>
              <h5>Extensive Database</h5>
              <p>Choose from many different session options</p>
              <figure data-aos='zoom-in' data-aos-delay='200' data-aos-anchor-placement='center-center'>
                <Image className='img-fluid' src='./images/features/phone_1/image@2x_c.webp' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-12 col-sm-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>2</p>
              <h5>Flexible Session</h5>
              <p>Enjoy sessions offered in-studio, home visits, or virtual</p>
              <figure data-aos='zoom-in' data-aos-delay='400' data-aos-anchor-placement='center-center'>
                <Image className='img-fluid' src='./images/features/phone_2/image@2x_c.webp' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-12 col-sm-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>3</p>
              <h5>Bilingual Energy Healers</h5>
              <p>Our practitioners speak multiple languages</p>
              <figure data-aos='zoom-in' data-aos-delay='600' data-aos-anchor-placement='center-center'>
                <Image className='img-fluid' src='./images/features/phone_3/image@2x_c.webp' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-12 col-sm-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>4</p>
              <h5>Earn Rewards</h5>
              <p>Use points to unlock 50% off discounts</p>
              <figure data-aos='zoom-in' data-aos-delay='800' data-aos-anchor-placement='center-center'>
                <Image className='img-fluid' src='./images/features/phone_4/image@2x_c.webp' alt='' />
              </figure>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
