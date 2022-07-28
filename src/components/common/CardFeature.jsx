import { m } from 'framer-motion';
import Image from './Image';

export default function CardFeature({ id, title, sms, image, delay }) {
  const smsBr = sms.split('/');
  return (
    <aside className='col-12 col-sm-6 col-md-6 col-lg-3'>
      <article className='features_item'>
        <p className='number'>{id}</p>
        <h5>{title}</h5>
        <p>
          {smsBr[0]} <br />
          {smsBr[1]}
        </p>
        <m.figure
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: delay }}
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        >
          <Image className='img-fluid' src={image} alt={title} />
        </m.figure>
      </article>
    </aside>
  );
}
