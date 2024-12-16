import React from 'react'
import './card.css'

function BCard(props) {
    return (
        <>
            <div className="card-container" >
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="b-name">{props.name}</p>
                    <p className='fw-bold'>Rs.{props.price}</p>
                    <button className='Add-to-Cart text-uppercase'>Add To Cart</button>
                </div>
            </div>

        </>
    )
}

export default BCard