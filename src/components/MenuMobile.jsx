import Link from 'next/link';
import { useAppContext } from 'src/context';

export default function MenuMobile() {
	const { /* handleContact, */ handleOpen } = useAppContext();

	const menuLinks = [
		{ name: 'FAQs', to: '/faqs' },
		{ name: 'Privacy Policy', to: '/privacy-policy' },
		{ name: 'Terms & Conditions', to: '/terms-conditions' },
	];

	return (
		<div className='mobile'>
			<div>
				<a className='app_store' href='#'>
					<img src='./images/app_store_big.svg' alt='app store' />
				</a>
			</div>
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
					<img src='./images/pinterest_menu.svg' alt='pinterest icon' />
				</figure>
				<p>© Dharma 2022</p>
			</div>
		</div>
	);
}
