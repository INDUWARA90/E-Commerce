import React from 'react'
import './caro.css'

import Carousel from 'react-bootstrap/Carousel';

import second1 from '../../assets/HP01.jpg'
import second2 from '../../assets/HP02.webp'
import second3 from '../../assets/HP03.webp'


function Caro() {
  return (
    <>
     <Carousel>
                <Carousel.Item>
                    <img src={second1} alt="..."  className='B-image'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={second2} alt="..."  className='B-image'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={second3} alt="..."  className='B-image'/>
                </Carousel.Item>
            </Carousel>

    
    </>
  )
}

export default Caro