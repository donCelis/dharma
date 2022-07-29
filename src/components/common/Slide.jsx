import { m, domMax } from 'framer-motion';
import { useRef, useState } from 'react';
import MinMotion from './MinMotion';

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
			<m.p initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} className='offer_text'>
				Download today and receive 20% off your first booked session
			</m.p>
		</section>
	);
}
