import React from 'react'
import './card.css'


function BCard(product) {


    return (
        <>
            <div className="card-container" >
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="b-name">{product.name}</p>
                    <p className='fw-bold'>Rs.{product.price}</p>
                    <button className='Add-to-Cart text-uppercase'
                    
                

                    >Add To Cart</button>
                </div>
            </div>

        </>
    )
}

export default BCard