// layout
import Page from 'src/components/Page';
import HomeHeader from 'src/components/home/HomeHeader';
import HomeHero from 'src/components/home/HomeHero';
import HomeDiscover from 'src/components/home/HomeDiscover';
import HomeList from 'src/components/home/HomeList';
import HomeFeatures from 'src/components/home/HomeFeatures';
import HomePromo from 'src/components/home/HomePromo';
import Footer from 'src/components/Footer';
import MenuOpen from 'src/components/common/MenuOpen';
import { useAppContext } from 'src/context';
import { AnimatePresence } from 'framer-motion';
import MenuMobile from 'src/components/MenuMobile';
import ContactUs from 'src/components/ContactUs';

const data_head = {
  title: 'Index page',
  description: 'Texto de prueba',
};

export default function Home() {
  const { isOpen, handleOpen, isOpenContact, handleContact } = useAppContext();

  return (
    <Page {...data_head}>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <MenuOpen state={isOpen} onState={handleOpen}>
            <MenuMobile />
          </MenuOpen>
        )}
        {isOpenContact && (
          <MenuOpen state={isOpenContact} onState={handleContact}>
            <ContactUs />
          </MenuOpen>
        )}
      </AnimatePresence>
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
