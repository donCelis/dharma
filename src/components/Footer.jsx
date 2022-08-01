import Link from 'next/link';
import { useAppContext } from 'src/context';

export default function Footer() {
	const { handleContact } = useAppContext();
	const year = new Date().getFullYear();
	return (
		<footer>
			<div className='container mod_container'>
				<div className='middle'>
					<ul className='links'>
						<li>
							<Link href='/privacy-policy'>
								<a>Privacy Policy</a>
							</Link>
						</li>
						<li>
							<Link href='/terms-conditions'>
								<a>Terms & Conditions</a>
							</Link>
						</li>
						<li>
							<button onClick={handleContact}>Contact Us</button>
						</li>
					</ul>
				</div>
				<img className='pinterest' src='./images/pinterest.svg' alt='pinterest' />
				<p className='m-0 name-logo'>© Dharma {year}</p>
			</div>
		</footer>
	);
}
