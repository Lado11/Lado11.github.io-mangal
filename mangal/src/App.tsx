import About_Us from './components/about/about_us';
import Contacts from './components/contacts/contacts';
import Header from './components/header/header';
import Services from './components/services/services';
import Footer from './components/footer/footer';
import FooterBottom from './components/footer/footer-bottom';
import Catalog from './components/catalog/catalog';
import Home from './components/home/home';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Menu />
      <Catalog />
      <Services />
      <About_Us />
      <Contacts />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
