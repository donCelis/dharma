// layout
import Page from 'src/components/Page';
import HomeHeader from 'src/components/home/HomeHeader';
import HomeHero from 'src/components/home/HomeHero';
import HomeDiscover from 'src/components/home/HomeDiscover';

export default function Home() {
  const data_head = {
    title: 'Index page',
    description: 'Texto de prueba',
  };
  return (
    <Page {...data_head}>
      <HomeHeader />
      <HomeHero />
      <HomeDiscover />
    </Page>
  );
}
