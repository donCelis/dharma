import { m } from 'framer-motion';
import CardType from '../common/CardType';

const container = {
	hidden: { y: 200, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'easeOut',
			delayChildren: 0.3,
			staggerChildren: 0.6,
		},
	},
};

const dataType = [
	{
		front: {
			title: 'Sound Healing',
			image: './images/discover/photo_1/image@2x_c.webp',
		},
		back: {
			sms: 'Sound Healing uses vibrations from singing bowls and other instruments to relax your mind, body and soul.',
			list: ['Improves Health', 'Relieves Anxiety & Stress'],
		},
	},
	{
		front: {
			title: 'Reiki Therapy',
			image: './images/discover/photo_2/image@2x_c.webp',
		},
		back: {
			sms: 'Reiki is a healing technique that produces profound results through gentle touch, and energy transfer.',
			list: ['Balance Chakras', 'Speeds Spiritual Growth'],
		},
	},
	{
		front: {
			title: 'Holistic Massage',
			image: './images/discover/photo_3/image@2x_c.webp',
		},
		back: {
			sms: 'Holistic massages are a combination of energy healing techniques and bodywork blended together.',
			list: ['Relieves Stress', 'Reduce Muscle Tension'],
		},
	},
];

export default function HomeDiscover() {
	return (
		<section className='home_discover'>
			<div className='container mod_container'>
				<section className='d-flex gap-2'>
					<aside className='hide'>
						<img className='icon' src='./images/highlight.svg' alt='icon highlight' />
					</aside>
					<aside>
						<article className='home_discover_info'>
							<div className='d-flex'>
								<figure className='m-0'>
									<img className='icon view' src='./images/highlight.svg' alt='icon highlight' />
								</figure>
								<h3 className='m-0'>DISCOVER</h3>
							</div>
							<p className='col-12 col-md-8 col-lg-6 discover_text'>
								Once on the app, YOU can book sessions from our network of{' '}
								<strong>Energy Healers</strong> and <strong>Holistic Practitioners.</strong>
							</p>
							<div className='d-flex align-items-center justify-content-center'>
								<img
									className='me-1'
									width='24px'
									src='./images/swap-vertical.svg'
									alt='swap-vertical'
								/>
								<p className='text-center m-0'>Tap for more info</p>
							</div>
						</article>
						<m.div
							variants={container}
							viewport={{ once: true }}
							initial='hidden'
							whileInView='show'
							className='discover_list'
						>
							{dataType.map((card, index) => (
								<CardType key={index} {...card} />
							))}
						</m.div>
					</aside>
				</section>
			</div>
		</section>
	);
}
