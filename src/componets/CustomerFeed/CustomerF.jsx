import React from 'react'
import './customer.css'
import star1 from '../../assets/stars/4.5.png'
import star2 from '../../assets/stars/3.5.png'

function CustomerF({ customer }) {

    const returnStar = (count) => {
        if (count == 3.5) {
            return star2;
        } else if (count == 4.5) {
            return star1
        }
    }

    return (

            <div className="card mb-3 card">
                <div className="row g-0 container-inner">
                    <div className="col-md-4">
                        <img src={customer.image} className="img-fluid rounded-start image-customer" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title name">{customer.name}</h5>
                            <p className="card-text feedback">{customer.feedback}</p>
                            <p className="card-text mt-2"><small className="text-body-secondary"><img src={returnStar(customer.star)} alt="..."  className='start-resize'/></small></p>
                        </div>
                    </div>
                </div>
            </div>




    )
}

export default CustomerF