import Image from '../Image';

export default function HomeDiscover() {
  return (
    <section className='home_discover'>
      <div className='container mod_container'>
        <section className='d-flex gap-2'>
          <aside>
            <img className='icon' src='./images/highlight.svg' alt='' />
          </aside>
          <aside>
            <article className='home_discover_info'>
              <h3>DISCOVER</h3>
              <p className='col-12 col-md-8 col-lg-6'>
                Once on the app, YOU can book sessions from our network of <strong>Energy Healers</strong> and{' '}
                <strong>Holistic Practitioners.</strong>
              </p>
            </article>
            <div className='row gx-md-5 gy-5 gy-md-0'>
              <aside className='col-12 col-md-4'>
                <article className='discover_item'>
                  <Image className='img-fluid' src='./images/discover/photo_1/image@2x.png' alt='' />
                  <p>
                    Sound <br /> Healing
                  </p>
                </article>
              </aside>
              <aside className='col-12 col-md-4'>
                <article className='discover_item discover_item_mod'>
                  <Image className='img-fluid' src='./images/discover/photo_2/image@2x.png' alt='' />
                  <p>
                    Reiki <br /> Therapy
                  </p>
                </article>
              </aside>
              <aside className='col-12 col-md-4'>
                <article className='discover_item'>
                  <Image className='img-fluid' src='./images/discover/photo_3/image@2x.png' alt='' />
                  <p>
                    Reiki <br /> Therapy
                  </p>
                </article>
              </aside>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}
