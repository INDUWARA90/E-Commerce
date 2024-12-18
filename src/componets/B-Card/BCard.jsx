import React from 'react';
import './card.css'; // Assuming the correct path to CSS

function BCard({ id, name, price, image, addToCart,product}) {
  // Function that gets triggered when the "Add to Cart" button is clicked

  const handleAddToCart = () => {
    addToCart({ id,name, price, image, quantity: 1 }); 
  };

  return (
    <div className="card-container">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <p className="b-name">{product.name}</p>
        <p className="fw-bold">Rs.{product.price}</p>
        <button className="Add-to-Cart text-uppercase" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
      
    </div>
  );
}

export default BCard;
