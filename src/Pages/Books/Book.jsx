import React, { useEffect, useState } from 'react';
import './book.css';
import BCard from '../../componets/B-Card/BCard'
import { productArray } from "../../Data/Products"
import { addToCart, getCart, removeFromCart } from '../../Data/cart';

import AOS from 'aos';
import 'aos/dist/aos.css';



function Book() {

  useEffect(() => {
    AOS.init();
  }, [])

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
          className='search-box'
        />
        <button className='search-btn'>Search</button>
      </div>

      {/* Book Section */}
      <div className="container-books"
      
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      
      >
        {productArray.map((object, i) => (
          <BCard
            id={object.id}
            name={object.name}
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
