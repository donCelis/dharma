import { AnimatePresence } from 'framer-motion';

// layout
import Page from 'src/components/Page';
import HomeHeader from 'src/components/home/HomeHeader';
import HomeHero from 'src/components/home/HomeHero';
import HomeDiscover from 'src/components/home/HomeDiscover';
import HomeList from 'src/components/home/HomeList';
import HomeFeatures from 'src/components/home/HomeFeatures';
import HomePromo from 'src/components/home/HomePromo';
import Footer from 'src/components/Footer';

// components
import MenuMobile from 'src/components/MenuMobile';
import Header from 'src/components/Header';
import ContactUs from 'src/components/ContactUs';
import MenuOpen from 'src/components/common/MenuOpen';

//context
import { useAppContext } from 'src/context';

const data_head = {
  title: 'Index page',
  description: 'Texto de prueba',
};

export default function Home() {
  const { isOpen, isOpenContact } = useAppContext();

  return (
    <Page {...data_head}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {isOpen && (
          <MenuOpen state={isOpen}>
            <MenuMobile />
          </MenuOpen>
        )}
        {isOpenContact && (
          <MenuOpen state={isOpenContact}>
            <ContactUs />
          </MenuOpen>
        )}
      </AnimatePresence>
      <Header>
        <HomeHeader />
      </Header>
      <HomeHero />
      <HomeDiscover />
      <HomeList />
      <HomeFeatures />
      <HomePromo />
      <Footer />
    </Page>
  );
}
