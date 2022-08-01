import { AnimatePresence, m } from 'framer-motion';
import { useAppContext } from 'src/context';

const fadeInOut = {
	open: {
		x: '0%',
		opacity: 1,
	},
	closed: {
		x: '-100%',
		opacity: 0,
	},
};

export default function MenuOpen({ children, isVisible = false, position = '9999' }) {
	const { handleCloseAll } = useAppContext();

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			{isVisible && (
				<m.section
					variants={fadeInOut}
					initial='closed'
					exit='closed'
					animate={isVisible ? 'open' : 'closed'}
					transition={{ duration: 1, ease: 'backInOut' }}
					className='menu_open'
					style={{ zIndex: position }}
				>
					<button onClick={handleCloseAll} className='btn_close'>
						<img src='./images/icon_close.svg' alt='icon close modal' />
					</button>
					<div className='container'>{children}</div>
				</m.section>
			)}
		</AnimatePresence>
	);
}
