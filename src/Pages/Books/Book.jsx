import React, { useEffect, useState } from 'react';
import './book.css';
import BCard from '../../componets/B-Card/BCard';
import { productArray } from "../../Data/Products";
import { addToCart, getCart} from '../../Data/cart';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Book() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cart, setCart] = useState(getCart()); // Initialize cart state from the cart module
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Function to add product to the cart and update the state
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    setCart(getCart()); // Update the local state (cart) with the modified cart
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  // Filter the product array based on the search query
  const filteredBooks = productArray.filter((book) => 
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {/* Search Section */}
      <div className="container-search">
        <input
          type="text"
          placeholder="Search here..."
          className="search-box"
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <button className="search-btn">Search</button>
      </div>

      {/* Book Section */}
      <div
        className="container-books"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((object, i) => (
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
          ))
        ) : (
          <h3>No books found</h3> 
        )}
      </div>
    </div>
  );
}

export default Book;
