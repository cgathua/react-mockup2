import './App.css';
import Home from './components/Home';
import NavigationMenuDesktop from './components/Navbar';
import Phones from './components/Phones';
import Refurbished from './components/Refurbished';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <>
      <NavigationMenuDesktop /> 
      <Home />
      <Phones />
      <Refurbished />
      <Faqs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
