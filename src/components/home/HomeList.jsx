import Image from '../common/Image';

export default function HomeList() {
	return (
		<section className='home_list'>
			<div className='container mod_container'>
				<section className='home_list_grid mod-gap'>
					<aside className='image'>
						<Image src='./images/plant_left.svg' alt='image plant' />
					</aside>
					<article>
						<h3 className='home_list_title'>
							<img src='./images/icon_stars.svg' alt='icon stars' />
							HEAL YOUR ENERGY TODAY
						</h3>
						<ul>
							<li>
								<p>
									Dharma is here to help you <span>HEAL YOUR ENERGY</span> use the app to book
									Energy Healing sessions near you.
								</p>
							</li>
							<li>
								<p>
									All Energy Healers on our platform are <span>Accredited</span> and have been{' '}
									<span>Vetted</span> by dharma field teams.
								</p>
							</li>
							<li className='m-0'>
								<p className='m-0'>
									Rest assure your session will be in a <span>Clean</span> and <span>Safe</span>{' '}
									environment.
								</p>
							</li>
						</ul>
					</article>
					<aside className='image'>
						<Image src='./images/plant_right.svg' alt='image plant' />
					</aside>
				</section>
			</div>
		</section>
	);
}
