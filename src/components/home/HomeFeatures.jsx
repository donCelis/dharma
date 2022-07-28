import CardFeature from '../common/CardFeature';

const dataFeatures = [
  {
    id: 1,
    title: 'Extensive Database',
    sms: `Choose from many/different session options`,
    image: './images/features/phone_1/image@2x_c.webp',
    delay: 0.3,
  },
  {
    id: 2,
    title: 'Flexible Session',
    sms: 'Enjoy sessions offered/in-studio, home visits, or virtual',
    image: './images/features/phone_2/image@2x_c.webp',
    delay: 0.6,
  },
  {
    id: 3,
    title: 'Bilingual Energy Healers',
    sms: 'Our practitioners/speak multiple languages',
    image: './images/features/phone_3/image@2x_c.webp',
    delay: 0.9,
  },
  {
    id: 4,
    title: 'Earn Rewards',
    sms: 'Use points to/unlock 50% off discounts',
    image: './images/features/phone_4/image@2x_c.webp',
    delay: 1.2,
  },
];

export default function HomeFeatures() {
  return (
    <section className='home_features'>
      <div className='container'>
        <h3 className='home_features_title'>
          <img src='./images/icon_sun.svg' alt='' />
          DHARMA FEATURES
        </h3>
        <div className='row gx-0 gx-lg-4 pt-3'>
          {dataFeatures.map((card) => (
            <CardFeature key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
