import Link from 'next/link';
import { useAppContext } from 'src/context';

export default function MenuMobile() {
	const { handleContact, handleOpen } = useAppContext();
	const year = new Date().getFullYear();

	return (
		<div className='mobile'>
			<div>
				<a className='app_store' href='#'>
					<img src='./images/app_store_big.svg' alt='app store' />
				</a>
			</div>
			<nav className='menu_open_nav'>
				<Link href={'/faqs'}>
					<a onClick={handleOpen}>FAQs</a>
				</Link>
				<button onClick={handleContact}>Contact Us</button>
				<Link href={'/privacy-policy'}>
					<a onClick={handleOpen}>Privacy Policy</a>
				</Link>
				<Link href={'/terms-conditions'}>
					<a onClick={handleOpen}>Terms & Conditions</a>
				</Link>
			</nav>
			<div className='menu_open_footer'>
				<figure>
					<img src='./images/pinterest_menu.svg' alt='pinterest icon' />
				</figure>
				<p>© Dharma {year}</p>
			</div>
		</div>
	);
}
