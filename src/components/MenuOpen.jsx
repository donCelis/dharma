import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAppContext } from 'src/context';
import Image from './common/Image';

const fadeInOut = {
  open: {
    x: '0%',
  },
  closed: {
    x: '-100%',
  },
};

export default function MenuOpen() {
  const { handleClose, isOpen } = useAppContext();
  return (
    <motion.section
      variants={fadeInOut}
      initial='closed'
      exit='closed'
      animate={isOpen ? 'open' : 'closed'}
      transition={{ duration: 1, ease: 'backInOut' }}
      className='menu_open'
    >
      <button onClick={handleClose} className='btn_close'>
        <Image src='./images/icon_close.svg' alt='' />
      </button>
      <div className='container'>
        <figure className='app_store'>
          <Image src='./images/app_store_big.svg' alt='app store' />
        </figure>
        <nav className='menu_open_nav'>
          <Link href={'/'}>
            <a>FAQs</a>
          </Link>
          <Link href={'/'}>
            <a>Contact Us</a>
          </Link>
          <Link href={'/'}>
            <a>Privacy Policy</a>
          </Link>
          <Link href={'/'}>
            <a>Terms & Conditions</a>
          </Link>
        </nav>
        <div className='menu_open_footer'>
          <figure>
            <Image src='./images/pinterest_menu.svg' alt='' />
          </figure>
          <p>© Dharma 2022</p>
        </div>
      </div>
    </motion.section>
  );
}
