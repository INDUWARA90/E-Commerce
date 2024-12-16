import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './componets/Common/Header/Header';
import Footer from './componets/Common/Footer/Footer';
import Home from "../src/Pages/Home/Home";
import Book from "../src/Pages/Books/Book";


function App() {
  

  return (
    <>
      <div className='conatiner'>    

            <Header />

      <Routes>
          
           <Route path='/' element={<Home/>} />
          <Route path='/book' element={<Book />} />
          

      </Routes>

            <Footer />

      </div>
    
    </>
  )
}

export default App
