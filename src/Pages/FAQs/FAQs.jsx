import React from 'react'
import './faq.css'
import FAQBox from './FAQBox'
import problemsArray from '../../Data/faqs'

function FAQs() {
  return (
    <div className='container mb-5'>
        
        <h3 className='text-center mt-4'>FAQs Unraveled: Your Questions Answered!</h3>
        
        <div className='conatiner-box mt-4'>
              {
                problemsArray.map((pro,i)=>{
                    return <FAQBox problem={pro.problem} answer={pro.answer} key={i} />
                })
              }
        </div>      
  



    </div>
  )
}

export default FAQs