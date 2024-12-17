import React, { useState } from 'react';
import './book.css';
import BCard from '../../componets/B-Card/BCard'
import { productArray } from "../../Data/Products"
import { addToCart, getCart, getTotal, removeFromCart } from '../../Data/cart';

import CartProduct from '../../Cart/CartProduct'

function Book() {
  const [cart, setCart] = useState(getCart()); // Initialize cart state from the cart module

  // Function to add product to the cart and update the state
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    setCart(getCart()); // Update the local state (cart) with the modified cart
    
  };

  // Function to remove a product from the cart and update the state
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); // Remove the product by its ID
    setCart(getCart()); // Update the local state (cart) with the modified cart
  };

  return (
    <div className="container">
      {/* Search Section */}
      <div className="container-search">
        <input
          type="text"
          placeholder="Search here..."
        />
        <button>Search</button>
      </div>

      {/* Book Section */}
      <div className="container-books">
        {productArray.map((object, i) => (
          <BCard
            id={object.id}
            name={object.productName}
            price={object.price}
            image={object.image}
            key={i}
            quantity={object.quantity}
            addToCart={handleAddToCart} // Pass the handleAddToCart function to BCard
            product={object}
          />
        ))}
      </div>

    </div>
  );
}

export default Book;
