import { motion } from 'framer-motion';
import Image from './Image';

const fadeInOut = {
  open: {
    x: '0%',
  },
  closed: {
    x: '-100%',
  },
};

export default function MenuOpen({ children, state = false, onState }) {
  return (
    <motion.section
      variants={fadeInOut}
      initial='closed'
      exit='closed'
      animate={state ? 'open' : 'closed'}
      transition={{ duration: 1, ease: 'backInOut' }}
      className='menu_open'
    >
      <button onClick={onState} className='btn_close'>
        <Image src='./images/icon_close.svg' alt='' />
      </button>
      <div className='container'>{children}</div>
    </motion.section>
  );
}
