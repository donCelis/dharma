import Link from 'next/link';
import { useAppContext } from 'src/context';

export default function HomeHeader() {
  const { handleOpen } = useAppContext();
  return (
    <header className='home_header'>
      <div className='container'>
        <figure onClick={handleOpen} className='mb-0'>
          <img src='./images/icon_menu.svg' alt='icon menu' />
        </figure>
        <nav className='menu'>
          <Link href={'/'}>
            <a>Privacy Policy</a>
          </Link>
          <Link href={'/'}>
            <a>Terms of Use</a>
          </Link>
          <Link href={'/'}>
            <a>Contact Us</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
