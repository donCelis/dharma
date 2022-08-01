import Image from './Image';

export default function CardFeature({ id, title, sms, image }) {
	const [firstWord, lastWord] = sms.split('/');
	return (
		<aside className='col-12 col-sm-6 col-md-6 col-lg-3'>
			<article className='features_item'>
				<p className='number'>{id}</p>
				<h5>{title}</h5>
				<p>
					{firstWord} <br />
					{lastWord}
				</p>
				<figure>
					<Image className='img-fluid' src={image} alt={title} />
				</figure>
			</article>
		</aside>
	);
}
