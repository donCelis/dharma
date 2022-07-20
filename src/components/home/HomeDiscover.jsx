import Image from '../Image';

export default function HomeDiscover() {
  return (
    <section className='home_discover'>
      <div className='container mod_container'>
        <section className='d-flex gap-2'>
          <aside className='hide'>
            <img className='icon' src='./images/highlight.svg' alt='' />
          </aside>
          <aside>
            <article className='home_discover_info'>
              <div className='d-flex'>
                <figure className='m-0'>
                  <img className='icon view' src='./images/highlight.svg' alt='' />
                </figure>
                <h3 className='m-0'>DISCOVER</h3>
              </div>
              <p className='col-12 col-md-8 col-lg-6'>
                Once on the app, YOU can book sessions from our network of <strong>Energy Healers</strong> and{' '}
                <strong>Holistic Practitioners.</strong>
              </p>
            </article>
            <div className='discover_list'>
              <article className='discover_item'>
                <Image className='img-fluid' src='./images/discover/photo_1/image@2x.png' alt='' />
                <p>
                  Sound <br /> Healing
                </p>
              </article>
              <article className='discover_item discover_item_mod'>
                <Image className='img-fluid' src='./images/discover/photo_2/image@2x.png' alt='' />
                <p>
                  Reiki <br /> Therapy
                </p>
              </article>
              <article className='discover_item'>
                <Image className='img-fluid' src='./images/discover/photo_3/image@2x.png' alt='' />
                <p>
                  Holistic <br /> Massage
                </p>
              </article>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}
