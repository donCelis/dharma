// layout
import Page from 'src/components/Page';
import HomeHeader from 'src/components/home/HomeHeader';
import HomeHero from 'src/components/home/HomeHero';
import HomeDiscover from 'src/components/home/HomeDiscover';
import HomeList from 'src/components/home/HomeList';
import HomeFeatures from 'src/components/home/HomeFeatures';
import HomePromo from 'src/components/home/HomePromo';
import Footer from 'src/components/Footer';

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
      <HomeList />
      <HomeFeatures />
      <HomePromo />
      <Footer />
    </Page>
  );
}
