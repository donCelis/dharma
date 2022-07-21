import Link from "next/link";
import Image from "./common/Image";

export default function MenuMobile() {
  return (
    <>
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
    </>
  );
}
