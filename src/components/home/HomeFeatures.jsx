import Image from '../Image';

export default function HomeFeatures() {
  return (
    <section className='home_features'>
      <div className='container'>
        <h3 className='home_features_title'>
          <Image src='./images/icon_sun.svg' alt='' />
          DHARMA FEATURES
        </h3>
        <div className='row'>
          <aside className='col-6 col-md-3'>
            <article>
              <figure>
                <Image className='img-fluid' src='./images/features/phone_1/image@2x.png' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-6 col-md-3'>
            <article>
              <figure>
                <Image className='img-fluid' src='./images/features/phone_2/image@2x.png' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-6 col-md-3'>
            <article>
              <figure>
                <Image className='img-fluid' src='./images/features/phone_3/image@2x.png' alt='' />
              </figure>
            </article>
          </aside>
          <aside className='col-6 col-md-3'>
            <article>
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
