import { motion } from 'framer-motion';
import { useAppContext } from 'src/context';
import Image from './Image';

const fadeInOut = {
  open: {
    x: '0%',
    opacity: 1,
  },
  closed: {
    x: '-100%',
    opacity: 0,
  },
};

export default function MenuOpen({ children, state = false }) {
  const { handleCloseAll } = useAppContext();

  return (
    <motion.section
      variants={fadeInOut}
      initial='closed'
      exit='closed'
      animate={state ? 'open' : 'closed'}
      transition={{ duration: 1, ease: 'backInOut' }}
      className='menu_open'
    >
      <button onClick={handleCloseAll} className='btn_close'>
        <Image src='./images/icon_close.svg' alt='' />
      </button>
      <div className='container'>{children}</div>
    </motion.section>
  );
}
