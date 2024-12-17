import React from 'react'
import './about.css'
import test from '../../assets/HP01.jpg'


function About() {
    return (
        <>
            <div className='mt-5 mb-5 container'>

                <div className='header-containre'>

                    <h6 className='text-center'>Who We Are</h6>
                    <h3 className='text-center'>Discover Our Journey, Vision, and Team</h3>
                    <p className='text-center mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere magni ab ad temporibus in, eum animi rem illo neque quas repudiandae! Mollitia, inventore repudiandae maiores accusamus dolorem excepturi quisquam. Accusamus!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quidem quod optio soluta assumenda accusantium ipsum culpa, dolorum numquam asperiores, quisquam quae atque ea laboriosam! Voluptatem nobis repudiandae nam reiciendis?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde facilis maiores quod ducimus iusto ut tempora provident molestias, ab illo! Animi sequi delectus aspernatur autem, cupiditate quae maxime iure deleniti.
                    </p>
                </div>

                <div className='header-image mt-5'>

                    <img src={test} alt="..." className='about-header-images' />
                    <img src={test} alt="..." className='about-header-images' />
                    <img src={test} alt="..." className='about-header-images' />

                </div>

                <div className='container-info mt-5'>

                    <div className='our-Mission'>
                        <h2>Our Mission</h2>
                        <p>
                            To satisfy the customers by providing quality service based on essential values actively supporting the younger generation of the country to improve their knowledge, attitudes and talents. Work out a plan to meet the challenges faced by the industry, collectively and individually while safeguarding the prestigious name established by Sarasavi Bookshop (Pvt) Ltd as the pioneers of this field
                        </p>
                    </div>

                    <div className='our-Vision'>
                        <h2>Our Vision</h2>
                        <p>
                            To satisfy the customers by providing quality service based on essential values actively supporting the younger generation of the country to improve their knowledge, attitudes and talents. Work out a plan to meet the challenges faced by the industry, collectively and individually while safeguarding the prestigious name established by Sarasavi Bookshop (Pvt) Ltd as the pioneers of this field
                        </p>
                    </div>

                </div>


                <div className='partners-conatiner mt-5'>
                    <h6 className='text-center'>OUR PARTNERS</h6>
                    <h3 className='text-center'>Our International Relationships</h3>
                  
                </div>

            </div>

        </>
    )
}

export default About