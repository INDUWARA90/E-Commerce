import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Footer() {

   const handelClick=()=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Currently On Devolpment!",
      });
  
    }

    return (
        <>
            <div className="container mb-0">
                <footer className="">
                    <div className="row">
                        
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Quick Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link  to="/"  className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link  to="/about" className="nav-link p-0 text-body-secondary">About Us</Link></li>
                                <li className="nav-item mb-2"><Link  to="/contact"className="nav-link p-0 text-body-secondary">Contact Us</Link></li>
                                <li className="nav-item mb-2"><Link  to="/book" className="nav-link p-0 text-body-secondary">Books</Link></li>

                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3 ">
                            <h5>Information</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/privacy" className="nav-link p-0 text-body-secondary">Privacy Policy</Link></li>
                                <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn " type="button" onClick={handelClick} style={{backgroundColor:'#A294F9',color:'white'}}>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2024 Tale Time Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use /></svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use /></svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use /></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Footer