import './App.css'
import Home from './components/Home'
import NavigationMenuDesktop from './components/Navbar'
import Phones from './components/Phones'
import Refurbished from './components/Refurbished'

function App() {
  return (
    <>
      <NavigationMenuDesktop /> 
      <Home />
      <Phones />
      <Refurbished />
    </>
  )
}

export default App
