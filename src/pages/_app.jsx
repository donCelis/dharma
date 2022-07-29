import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'nprogress/nprogress.css';
import 'src/styles/globals.scss';

import { Router } from 'next/router';
import { AppProvider } from 'src/context';
import { done, start } from 'nprogress';

import MinMotion from 'src/components/common/MinMotion';
import { AnimatePresence, m } from 'framer-motion';

Router.events.on('routeChangeStart', () => start());
Router.events.on('routeChangeComplete', () => done());
Router.events.on('routeChangeError', () => done());

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

function MyApp({ Component, pageProps, router }) {
	return (
		<AppProvider>
			<AnimatePresence>
				<MinMotion>
					<m.main
						variants={variants}
						animate='animate'
						initial='initial'
						exit='initial'
						key={router.route}
					>
						<Component {...pageProps} />
					</m.main>
				</MinMotion>
			</AnimatePresence>
		</AppProvider>
	);
}

export default MyApp;
