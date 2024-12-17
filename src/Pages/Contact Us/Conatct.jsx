import React from 'react'
import './contact.css'
import ContactForm from '../../componets/ContactForm/ContactForm'

function Conatct() {
    return (
        <div className='container mb-5 mt-5' >
            <div className='conatiner-conatct'>


                <div className='header-info'>
                    <h6>Contact Us</h6>
                    <h2>Get In Touch With Us</h2>
                    <p>
                        Please contact us through our website, email, or phone. You can also visit one of our 27 bookstores across Sri Lanka. We are committed to providing the best customer service and will do our best to assist you. ONLINE WORKING HOURS - Monday to Friday - 9.00am - 5.30 pm Saturday - 9.00 am - 1.30 pm
                    </p>
                </div>

                <div className='conatiner-info mt-4'>

                    <div className='left'>

                        <div className='boder-box'>
                            <h5>Address</h5>
                            No.30,<br />
                            Stanley Thilakarathne Mawatha,<br />
                            Nugegoda,<br />
                            Sri Lanka, 10250<br />
                        </div>

                        <div className='boder-box'>
                            <h5>Contact number</h5>
                            +94 711304050 / 0112820820
                        </div>

                        <div className='boder-box'>
                            <h5>Email</h5>
                            webadmin@sarasavi.lk
                        </div>
                    </div>

                    {/* conatct form */}
                    <div className='rgiht'>
                        <ContactForm />
                    </div>


                </div>

            </div>


        </div>
    )
}

export default Conatct