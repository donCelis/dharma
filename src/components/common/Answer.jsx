import { AnimatePresence, m } from 'framer-motion';
import { useState } from 'react';

const animate = {
	open: {
		opacity: 1,
		height: 'auto',
	},
	close: {
		opacity: 0,
		height: 0,
	},
};

export default function Answer({ title, text }) {
	const [isActive, setIsActive] = useState(false);

	const handleActive = () => setIsActive(!isActive);

	return (
		<article className='answers_item'>
			<figure className='icon_faq' onClick={handleActive}>
				<img
					src={`./images/faqs/${!isActive ? 'icon_plus.svg' : 'icon_munus.svg'}`}
					alt={`icon ${!isActive ? 'open' : 'closed'}`}
				/>
			</figure>
			<aside>
				<div className='answer_title' onClick={handleActive}>
					<h5>{title}</h5>
				</div>
				<AnimatePresence exitBeforeEnter>
					{isActive && (
						<m.section
							className='answer_content'
							initial='close'
							exit='close'
							animate={isActive ? 'open' : 'close'}
							variants={animate}
							transition={{ duration: 0.3 }}
						>
							{typeof text === 'string' ? (
								<p className='text'>{text}</p>
							) : (
								text.map((element, index) => (
									<p key={index} className='text'>
										{element}
									</p>
								))
							)}
						</m.section>
					)}
				</AnimatePresence>
			</aside>
		</article>
	);
}
