import Link from 'next/link';
import { useAppContext } from 'src/context';
import Image from './common/Image';

export default function MenuMobile() {
  const { /* handleContact, */ handleOpen } = useAppContext();

  const menuLinks = [
    { name: 'FAQs', to: '/faqs' },
    { name: 'Privacy Policy', to: '/privacy-policy' },
    { name: 'Terms & Conditions', to: '/terms-conditions' },
  ];

  return (
    <div className='mobile'>
      <figure className='app_store'>
        <Image src='./images/app_store_big.svg' alt='app store' />
      </figure>
      <nav className='menu_open_nav'>
        {menuLinks.map((item, index) => (
          <Link key={index} href={item.to}>
            <a onClick={handleOpen}>{item.name}</a>
          </Link>
        ))}
        {/* <Link href={'/faqs'}>
          <a>FAQs</a>
        </Link>
        <button onClick={handleContact}>Contact Us</button>
        <Link href={'/'}>
          <a>Privacy Policy</a>
        </Link>
        <Link href={'/'}>
          <a>Terms & Conditions</a>
        </Link> */}
      </nav>
      <div className='menu_open_footer'>
        <figure>
          <Image src='./images/pinterest_menu.svg' alt='' />
        </figure>
        <p>© Dharma 2022</p>
      </div>
    </div>
  );
}
