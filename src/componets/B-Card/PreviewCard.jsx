import React from 'react'

function PreviewCard({product}) {
    return (
        <div className="card-container">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <p className="b-name">{product.name}</p>
                <p className="fw-bold">Rs.{product.price}</p>
            </div>
        </div>
    )
}

export default PreviewCard