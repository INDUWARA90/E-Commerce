import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './componets/Common/Header/Header';
import Footer from './componets/Common/Footer/Footer';
import Home from "../src/Pages/Home/Home";
import Book from "../src/Pages/Books/Book";

import Cart from './Cart/Cart';
import About from './Pages/About/About';
import Conatct from './Pages/Contact Us/Conatct';



function App() {


  return (
    <>
      <div className='conatiner'>

        <Header />
        
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/book' element={<Book />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Conatct />} />
  


          </Routes>
        
        <Footer />

      </div>

    </>
  )
}

export default App
