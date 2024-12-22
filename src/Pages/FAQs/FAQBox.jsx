import React from 'react'
import './faq.css'

function FAQBox({problem,answer}) {
  return (
    <div className='outer-container'>
        <div >
            <h5>{problem}</h5>
            <p>
                {
                    answer
                }
            </p>
        </div>

    </div>
  )
}

export default FAQBox