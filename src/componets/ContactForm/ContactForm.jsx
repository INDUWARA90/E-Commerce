import React from 'react'
import './conatctform.css'
import Swal from 'sweetalert2'

function ContactForm() {

  const onSubmit = async (event) => {


    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0039c595-6a81-46f7-8cba-c790ceb4b732");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });

    }
  };

  return (
    <div className='form-conatiner'>
      <h2 className='text-center mb-3'>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <p>Enter name :</p>
          <input type="text" className='text-feild' name='name' required/>
        </div>

        <div className='mb-3'>
          <p>Enter Email :</p>
          <input type="email" className='text-feild' name='email' required />
        </div>

        <div className='mb-3'>
          <p>Enter Message :</p>
          <textarea name="message" id="" className='text-box' required></textarea>
        </div>

        <div className='submit-button-container mt-3'>
          <button className='submit-button' type='submit'>Submit</button>
        </div>

      </form>


    </div>
  )
}

export default ContactForm