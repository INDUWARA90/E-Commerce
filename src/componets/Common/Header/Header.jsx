import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'



function Header() {


  return (
    
    <header className="p-3 mb-3 border-bottom">
      
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to='/' className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link to='/book' className="nav-link px-2 link-body-emphasis">Books</Link></li>
            <li><Link to='/about' className="nav-link px-2 link-body-emphasis">About Us</Link></li>
            <li><Link to='/contact' className="nav-link px-2 link-body-emphasis">Contact Us</Link></li>
          </ul>

          <Link to='/cart'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart me-3 cart-icon" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          </Link>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
          

          {/* User Icon */}
          <div className="dropdown text-end"></div>

        </div>
      </div>
    </header>
  )
}

export default Header