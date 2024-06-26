import Head from 'next/head';
import MenuOpen from 'src/components/common/MenuOpen';
import ContactUs from 'src/components/ContactUs';
import { useAppContext } from 'src/context';
import Footer from '../components/Footer';

function Page({ title, children }) {
	const { isOpenContact } = useAppContext();
	return (
		<>
			<Head>
				<title>{`${title} | DHARMA app - Protect Your Energy`}</title>
				<meta name='title' content={title} />
				<meta property='og:title' content={title} />
				<meta name='twitter:title' content={title} />
			</Head>
			<MenuOpen isVisible={isOpenContact} position='100'>
				<ContactUs />
			</MenuOpen>
			{children}
			<Footer />
		</>
	);
}

Page.defaultProps = {
	title: 'Dharma -  Website',
};

export default Page;
