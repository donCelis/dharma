import Link from 'next/link';
import { useAppContext } from 'src/context';

export default function HomeHeader() {
  const { handleOpen, handleContact } = useAppContext();
  return (
    <>
      <figure onClick={handleOpen} className='mb-0 icon_menu'>
        <img src='./images/icon_menu.svg' alt='icon menu' />
      </figure>
      <nav className='menu'>
        <Link href='/privacy-policy'>
          <a className='menu_link'>Privacy Policy</a>
        </Link>
        <Link href='/terms-conditions'>
          <a className='menu_link'>Terms of Use</a>
        </Link>
        <button onClick={handleContact} className='contact'>
          Contact Us
        </button>
      </nav>
    </>
  );
}
