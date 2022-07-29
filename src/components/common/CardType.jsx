import { m } from 'framer-motion';
import Image from './Image';

const item = {
	hidden: { y: 200, opacity: 0 },
	show: { y: 0, opacity: 1 },
};

export default function CardType({ front, back }) {
	const titleBr = front.title.split(' ');
	return (
		<m.div variants={item} className='flip'>
			<article className='discover_item front'>
				<Image className='img-fluid' src={front.image} alt={front.title} />
				<p>
					{titleBr[0]}
					<br />
					{titleBr[1]}
				</p>
			</article>
			<article className='discover_item back'>
				<p>{back.sms}</p>
				<small>Benefits:</small>
				<ul>
					{back.list.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ul>
			</article>
		</m.div>
	);
}
