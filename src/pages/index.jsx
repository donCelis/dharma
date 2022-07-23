// layout
import Page from 'src/components/Page';
import HomeHeader from 'src/components/home/HomeHeader';
import HomeHero from 'src/components/home/HomeHero';
import HomeDiscover from 'src/components/home/HomeDiscover';
import HomeList from 'src/components/home/HomeList';
import HomeFeatures from 'src/components/home/HomeFeatures';
import Promo from 'src/components/Promo';

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
      <MenuOpen isVisible={isOpen}>
        <MenuMobile />
      </MenuOpen>
      <MenuOpen isVisible={isOpenContact}>
        <ContactUs />
      </MenuOpen>
      <Header>
        <HomeHeader />
      </Header>
      <HomeHero />
      <HomeDiscover />
      <HomeList />
      <HomeFeatures />
      <Promo />
    </Page>
  );
}
