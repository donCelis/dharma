// layout
import Page from 'src/components/Page';
import HomeHeader from 'src/components/home/HomeHeader';
import HomeHero from 'src/components/home/HomeHero';
import HomeDiscover from 'src/components/home/HomeDiscover';
import HomeList from 'src/components/home/HomeList';
import HomeFeatures from 'src/components/home/HomeFeatures';
import HomePromo from 'src/components/home/HomePromo';
import Footer from 'src/components/Footer';
import MenuOpen from 'src/components/MenuOpen';
import { useAppContext } from 'src/context';
import { AnimatePresence } from 'framer-motion';

const data_head = {
  title: 'Index page',
  description: 'Texto de prueba',
};

export default function Home() {
  const { isOpen } = useAppContext();

  return (
    <Page {...data_head}>
      <AnimatePresence>{isOpen && <MenuOpen />}</AnimatePresence>
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
