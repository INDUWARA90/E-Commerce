import React, { useEffect } from 'react'
import './about.css'
import Member from '../../componets/Member/Member'
import member from '../../Data/member'

import about01 from '../../assets/about01.jpg'
import about02 from '../../assets/about02.jpg'
import about03 from '../../assets/about03.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <div className='mt-5 container container-about-outer'>

                <div className='header-containre'>

                    <h6 className='text-center'>Who We Are</h6>
                    <h3 className='text-center'>Discover Our Journey, Vision, and Team</h3>
                    <p className='text-center mt-3 ' style={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere magni ab ad temporibus in, eum animi rem illo neque quas repudiandae! Mollitia, inventore repudiandae maiores accusamus dolorem excepturi quisquam. Accusamus!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quidem quod optio soluta assumenda accusantium ipsum culpa, dolorum numquam asperiores, quisquam quae atque ea laboriosam! Voluptatem nobis repudiandae nam reiciendis?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde facilis maiores quod ducimus iusto ut tempora provident molestias, ab illo! Animi sequi delectus aspernatur autem, cupiditate quae maxime iure deleniti.
                    </p>
                </div>

                <div className='header-image mt-5' data-aos="zoom-in">

                    <img src={about01} alt="..." className='about-header-images' />
                    <img src={about02} alt="..." className='about-header-images' />
                    <img src={about03} alt="..." className='about-header-images' />

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

                    <h2 className='text-center'>Meet Our Team</h2>
                    <div className='conatiner-team-member' data-aos="zoom-in-up">
                        {
                            member.map((obj, i) => {
                                return <Member member={obj} key={i} />
                            })
                        }

                    </div>


                </div>

            </div>

        </>
    )
}

export default About