import Image from '../Image';

export default function HomeFeatures() {
  return (
    <section className='home_features'>
      <div className='container'>
        <h3 className='home_features_title'>
          <Image src='./images/icon_sun.svg' alt='' />
          DHARMA FEATURES
        </h3>
        <div className='row pt-5'>
          <aside className='col-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>1</p>
              <h5>Extensive Database</h5>
              <p>Choose from many different session options</p>
              <figure>
                <Image className='img-fluid' src='./images/features/phone_1/image@2x.png' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>2</p>
              <h5>Flexible Session</h5>
              <p>Enjoy sessions offered in-studio, home visits, or virtual</p>
              <figure>
                <Image className='img-fluid' src='./images/features/phone_2/image@2x.png' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>3</p>
              <h5>Bilingual Energy Healers</h5>
              <p>Our practitioners speak multiple languages</p>
              <figure>
                <Image className='img-fluid' src='./images/features/phone_3/image@2x.png' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-6 col-md-6 col-lg-3'>
            <article className='features_item'>
              <p className='number'>4</p>
              <h5>Earn Rewards</h5>
              <p>Use points to unlock 50% off discounts</p>
              <figure>
                <Image className='img-fluid' src='./images/features/phone_4/image@2x.png' alt='' />
              </figure>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
