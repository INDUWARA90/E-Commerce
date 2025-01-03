import React, { useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import Caro from '../../componets/Carousel/Caro'

import img01 from '../../assets/HP01.jpg';
import img05 from '../../assets/avatar.png';
import img06 from '../../assets/user-interface.png';

import { featuredArray, newArrival } from "../../Data/Products";
import PreviewCard from '../../componets/B-Card/PreviewCard';


import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomerF from '../../componets/CustomerFeed/CustomerF';
import customer from '../../Data/customer';




function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='home-container-outer'>
            {/*  */}
            <section className='home-heading-section'>

                <div className="home-container mb-5">

                    <div className="home-data" data-aos="fade-down">
                        <h1 className='home-title'>
                            Browse & <br />
                            Select Your Choices
                        </h1>

                        <p className='home-description'>
                            Find the best books from your favorite
                            writers,explore hundreds of books with all possible,categories,
                            take advantage of the 50% discount and musch more
                        </p>
                        <Link to='/book'><button className='Explore-btn'>Explore Now</button></Link>
                    </div>

                    {/* carouel */}
                    <div data-aos="fade-left">
                        <Caro />
                    </div>
                    

                </div>

            </section>

            {/*  */}
            <section className='container conatiner-icons '>

                <div className='container-icon-grid'>

                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                        </svg>
                        <p className='mt-3 P-P'>Free Shipping</p>
                        <p className='mt-2 P-P'>Order More than $100</p>

                    </div>


                    <div className='d-flex flex-column justify-content-center align-items-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                        </svg>
                        <p className='mt-3 P-P'>Secure Payment</p>
                        <p className='mt-2 P-P'>100% Secure Payment</p>

                    </div>


                    <div className='d-flex flex-column justify-content-center align-items-center'>

                        <img src={img05} alt="..." width="46" height="46" />
                        <p className='mt-3 P-P'>24/7 Support</p>
                        <p className='mt-2 P-P'>Call us anytime</p>

                    </div>



                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={img06} alt="..." width="46" height="46" />
                        <p className='mt-3 P-P'>Eassy To Access</p>
                        <p className='mt-2 P-P'>User Friendly</p>

                    </div>

                </div>
            </section>


            {/* Featured Books */}
            <h1 className='text-center'>Featured Books</h1>

            <div className='conatiner-book'
            
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            
            >


                {
                    featuredArray.map((obj, i) => {
                        return <PreviewCard product={obj} key={i} />
                    })
                }


            </div>

            {/* discount section */}
            <section className='container-discount-info'>

                <div className='image-container-discount'
                data-aos="fade-right"
                >
                    <img src={img01} alt="..." className='discount-book' />
                </div>
                <div className='image-container-discount-description'
                data-aos="fade-left"
                >
                    <h1>Up To 50% Discount</h1>
                    <p>Take advantage of the discount days we have for you,buy books from your favorite writters
                        ,the more you buy,the more discount we have for you.</p>
                    <Link to='/book'><button className='shop-btn'>Shop Now</button></Link>
                </div>

            </section>


            {/* New Arrival Books */}
            <h1 className='text-center'>New Arrival</h1>

            <div className='conatiner-book mb-5'
            
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            
            >

                {
                    newArrival.map((obj, i) => {
                        return <PreviewCard product={obj} key={i} />
                    })
                }

            </div>

            <section className='container customer-feedback-section'>
                <h2 className='text-center'>Customer FeedBack</h2>
                <div className='conatiner-cus-feedback'>
                        {
                            customer.map((customer,key)=>{
                                return <CustomerF key={key} customer={customer} />
                            })
                        }
                </div>
            </section>


        </div>
    )
}

export default Home