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
                    At Tale Time, our journey began with a simple love for books and a vision to make reading more accessible to all. We started as a small online bookshop with a passion for curating stories that inspire and educate. Our vision is to foster a love for reading by offering a wide range of books that spark imagination and knowledge. Behind Tale Time is a dedicated team of book enthusiasts who work together to provide excellent service, recommend exciting reads, and ensure every customer finds their next great story. We’re here to make every reading experience unforgettable.
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
                        At Tale Time, our mission is to ignite a love for reading by providing easy access to a wide range of books that inspire, educate, and entertain. We are committed to curating a diverse collection that caters to readers of all ages and interests. Through exceptional customer service, fast delivery, and expert recommendations, we aim to create a seamless online shopping experience. Our goal is to make books a part of every reader’s life, fostering a community where stories connect, inspire, and shape the future of readers around the world.
                        </p>
                    </div>

                    <div className='our-Vision'>
                        <h2>Our Vision</h2>
                        <p>
                        At Tale Time, our vision is to create a world where books inspire, educate, and connect people across all walks of life. We strive to be the go-to online bookshop, offering a diverse collection of stories that cater to all tastes and ages. Our goal is to make reading accessible, enjoyable, and transformative for everyone, by providing a seamless shopping experience, expert recommendations, and a vast library of titles. Through our passion for books, we aim to cultivate a lifelong love of reading and foster a global community of book lovers.
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