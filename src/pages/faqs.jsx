import Link from 'next/link';
import Answer from 'src/components/common/Answer';
import Image from 'src/components/common/Image';
import Header from 'src/components/Header';
import Page from '../components/Page';

export default function Faqs() {
  const data_head = {
    title: 'FAQS',
    description: 'Texto de prueba',
  };

  const short_answers = [
    {
      title: 'How long are sessions?',
      text: 'Energy Healing appointments are 60-90 minutes long.',
    },
    {
      title: 'Are sessions offered in multiple languages?',
      text: 'Yes! Currently we are offering sessions in English and Spanish.',
    },
    {
      title: 'Can I cancel a session?',
      text: 'Yes. In order to receive a full refund, you must cancel at least two hours before your appointment time.',
    },
    {
      title: 'How long will it take to get my refund?',
      text: '3-5 days',
    },
    {
      title: 'What services do you offer?',
      text: 'We offer Reiki Chakra Therapy, Sound Healing, Acupuncture, and Holistic Massages.',
    },
  ];

  const long_answers = [
    {
      title: 'What is Energy Healing?',
      text: [
        'Energy Healing works in partnership with our bodies’ electromagnetic fields. These fields are invisible currents that respond to the environment around us.',
        'Energy Healing is practiced using ancient techniques that work to balance your chakras, meridian lines, and muscles to achieve inner PEACE and HARMONY!',
      ],
    },
    {
      title: 'How can Energy Healing benefit me?',
      text: [
        'Energy Healing is for everyone.',
        'Whether you suffer from physical discomfort and pain or mental and emotional battles— Energy Healing can improve your condition.',
        'It can even help to bring your mind, body, and spirit into a more cohesive alignment.',
      ],
    },
    {
      title: 'What happens during a session?',
      text: [
        'Energy Healing Practitioners will consult with you about your personal concerns and create a plan for your healing journey.',
        'Next, lay down, relax, and enjoy your energy healing experience.',
        'You may experience deep meditative states and possibly even restful sleep during your session. Our Healing Practitioners work with your energy and vibrations, which are connected to your body, inside and out.',
        'After your session, you will reflect with your Energy Healing Practitioner. Together you may discuss occurrences within the session and work on planning for the continuation of your healing.',
      ],
    },
  ];

  return (
    <Page {...data_head}>
      <Header>
        <Link href='/'>
          <a className='icon_back'>
            <Image visibleByDefault src='./images/icon_back.svg' alt='' />
          </a>
        </Link>
        <figure className='app_store app_store_min'>
          <Image src='./images/app_store_big.svg' alt='' />
        </figure>
      </Header>
      <section className='faqs'>
        <div className='container'>
          <h4>Frequently Asked Questions</h4>
          <section className='answers col-12 col-md-9 col-lg-6'>
            <p className='answers_caption'>SHORT ANSWER</p>
            {short_answers.map((item, index) => (
              <Answer key={index} {...item} />
            ))}
          </section>
          <section className='answers col-12 col-md-9 col-lg-6'>
            <p className='answers_caption'>LONG ANSWER</p>
            {long_answers.map((item, index) => (
              <Answer key={index} {...item} />
            ))}
          </section>
        </div>
      </section>
    </Page>
  );
}
