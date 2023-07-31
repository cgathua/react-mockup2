import './App.css';
import Home from './components/Home';
import NavigationMenuDesktop from './components/Navbar';
import Phones from './components/Phones';
import Refurbished from './components/Refurbished';
import FAQs from './components/Faqs';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavigationMenuDesktop /> 
      <Home />
      <Phones />
      <Refurbished />
      <FAQs />
      <Contact />
    </>
  )
}

export default App
