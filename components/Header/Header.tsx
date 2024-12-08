"use client" 
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';



function Header() {
  const[open,setOpen]=React.useState(false);
  return (
    <>
      <nav>
        <div className='container flex items-center gap-2 font-bold justify-between py-8'>
          {/* Logo section */}
          <div className='text-2xl flex items-center  gap-2 font-bold  uppercase'>
               <FaBook />
               <p className='text-secondary'>Blazer</p> 
               <p>Bookshop</p>
          </div>
          {/* Menu section */}
          <div className=' hidden md:block'>
             <ul className='flex items-center gap-6 text-gray-600'> 
                  <a href="/" className='inline-block py-1 px-3 hover:text-primary font-semibold'><li>Home</li></a>
                  <a href="/" className='inline-block py-1 px-3 hover:text-primary font-semibold'><li>Home</li></a>
                  <a href="/" className='inline-block py-1 px-3 hover:text-primary font-semibold'><li>Home</li></a>
                  <a href="/" className='inline-block py-1 px-3 hover:text-primary font-semibold'><li>Home</li></a>
               
                  
             </ul>
          </div>
          {/* Icon section */}
          <div className='flex gap-4 items-center'>

             <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
               <CiShoppingCart />
             </button>

             
             <button className='font-semibold text-primary hover:bg-primary hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
               Login
             </button>

          </div>
          {/* Mobile hamberger Menu section */}
          <div className='md:hidden' onClick={()=>setOpen(!open)}>
              <CiMenuBurger className='text-4xl' />
          </div>
        </div>
      </nav>

          {/* Mobile Side bar section */}
          <ResponsiveMenu value={open} />
    </>

  )
}

export default Header