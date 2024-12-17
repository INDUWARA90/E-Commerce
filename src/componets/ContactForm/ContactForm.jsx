import React from 'react'
import './conatctform.css'

function ContactForm() {
  return (
    <div className='form-conatiner'>
            <div>
                <p>Enter name</p>
                <input type="text" />
            </div>

            <div>
                <p>Enter Email</p>
                <input type="text" />
            </div>

            <div>
                <p>Enter Message</p>
                <textarea name="" id="" className='text-box'></textarea>
            </div>

            <button>Submit</button>
    </div>
  )
}

export default ContactForm