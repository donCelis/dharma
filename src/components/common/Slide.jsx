import { m, domMax } from 'framer-motion';
import { useRef, useState } from 'react';
import MinMotion from './MinMotion';

const fadeIn = {
	view: {
		opacity: 1,
		/* height: 'auto', */
		scale: 1,
	},
	hide: {
		opacity: 0,
		/* height: 0, */
		scale: 0,
	},
};

export default function Slide() {
	const limitRef = useRef(null);

	const [isVisible, setIsVisible] = useState(false);

	const handleDrag = () => {
		setIsVisible(true);
	};

	return (
		<section>
			<div className='hero_slider'>
				<MinMotion features={domMax}>
					<m.div className='wrapper' ref={limitRef}>
						<m.div
							className='cube'
							drag='x'
							dragConstraints={limitRef}
							onDragEnd={handleDrag}
							dragElastic={0.001}
							dragMomentum={false}
							dragSnapToOrigin
						/>
					</m.div>
				</MinMotion>
			</div>
			<m.p
				initial='hide'
				variants={fadeIn}
				animate={isVisible ? 'view' : 'hide'}
				className='offer_text m-0'
			>
				Download today and receive 20% off your first booked session
			</m.p>
		</section>
	);
}
