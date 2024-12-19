import React from 'react'
import './conatctform.css'

function ContactForm() {
  return (
    <div className='form-conatiner'>
          <h2 className='text-center mb-3'>Contact Us</h2>
            <div className='mb-3'>
                <p>Enter name :</p>
                <input type="text"  className='text-feild'/>
            </div>

            <div className='mb-3'>
                <p>Enter Email :</p>
                <input type="text"  className='text-feild'/>
            </div>

            <div className='mb-3'>
                <p>Enter Message :</p>
                <textarea name="" id="" className='text-box'></textarea>
            </div>

            <div className='submit-button-container mt-3'>
                <button className='submit-button'>Submit</button>
            </div>
            

    </div>
  )
}

export default ContactForm