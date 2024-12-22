import React from 'react'
import './policy.css'

function Policy() {
    return (
        <div className='container mb-5'>

            <h4>Tale Time Bookshop Privacy and Policy</h4>

            <h6 className='mt-4 mb-3'>
                Effective Date: 2025/12/12
            </h6>

            <p className=''>
                At Tale Time Bookshop us, we value the privacy of our customers. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit or make a purchase from our website at <a href="https://tale-time.netlify.app/" className='link'>Navigate Our Site</a>.
            </p>

            <h5 className='mt-4'> How We Share Your Information</h5>

            <p className='mb-3'>
                We do not sell or rent your personal information to third parties. However, we may share your personal information with trusted third-party service providers who assist us in operating the Site and fulfilling orders. For example:
            </p>

            <ul>
                <li className='mb-2'><span className='fontB'>Payment Processors: </span> We share payment information with secure payment gateways to process your transactions.</li>
                <li className='mb-2'><span className='fontB'>Shipping Partners:</span> We share your shipping information with delivery services to fulfill your orders.</li>
                <li className='mb-2'><span className='fontB'>Analytics Services:</span> We may share device and usage information with third-party analytics providers to understand how customers interact with our Site and improve our offerings.</li>
            </ul>

            <p>
                We may also disclose personal information when required by law, such as to comply with legal obligations or respond to a subpoena.
            </p>

            <h5 className='mt-4'>Data Security</h5>

            <p>
                We take the security of your personal information seriously and use appropriate technical and organizational measures to protect it from unauthorized access, use, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h5 className='mt-4'>Data Retention</h5>

            <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, such as processing your orders, complying with legal obligations, and resolving disputes. After that, we may delete or anonymize your personal data.
            </p>

            <h5 className='mt-4'>Your Rights and Choices</h5>

            <p>
                You have the following rights regarding your personal information:
            </p>

            <ul>
                <li className='mb-2'>
                    <span className='fontB'>Access and Update:</span>
                     You can access and update your personal information by logging into your account or contacting us.
                </li>
                <li className='mb-2'>
                    <span className='fontB'>Opt-Out:</span>
                     You can opt out of receiving promotional emails by following the unsubscribe instructions in the email or contacting us directly.
                </li>
                <li className='mb-2'>
                    <span className='fontB'>Cookies: </span>
                  You can disable cookies through your browser settings, though this may affect your experience on the Site.
                </li>
            </ul>

            <h5 className='mt-4'>Changes to This Privacy Policy</h5>
            <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the "Effective Date" at the top of the policy.
            </p>

            <h5 className='mt-4'>Contact Us</h5>

            <p className='mb-2'>
                If you have any questions or concerns about this Privacy Policy or the way we handle your personal information, please contact us:
            </p>

            <p className='address-container mt-4'>
                <span className='fontB' >Tale Time Bookshop</span> <br />
                No.30,<br />
                Panadura Road,<br />
                Horana, <br />
                Sri Lanka, 12400. <br />
            </p>
        </div>
    )
}

export default Policy