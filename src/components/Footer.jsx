import { useAppContext } from 'src/context';
import Image from './common/Image';

export default function Footer() {
  const { handleContact } = useAppContext();
  return (
    <footer>
      <div className='container mod_container'>
        <div className='middle'>
          <ul className='links'>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li>
              <button onClick={handleContact}>Contact Us</button>
            </li>
          </ul>
        </div>
        <Image className='pinterest' src='./images/pinterest.svg' alt='pinterest' />
        <p className='m-0 name-logo'>© Dharma 2022</p>
      </div>
    </footer>
  );
}
