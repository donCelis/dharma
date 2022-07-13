import Link from 'next/link';

export default function HomeHeader() {
  return (
    <header className='home_header'>
      <div className='container'>
        <figure className='mb-0'>
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
