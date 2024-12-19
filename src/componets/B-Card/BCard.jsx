import React, { useState } from 'react';
import './card.css'; // Assuming the correct path to CSS
import BookModal from '../../componets/ProductDetail/Detail'; // Import the modal component

function BCard({ id, name, price, image, addToCart, product }) {

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Function that gets triggered when the "Add to Cart" button is clicked
  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card-container">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        onClick={openModal} // Open modal when clicking the card
      />
      <div className="card-body">
        <p className="b-name">{product.name}</p>
        <p className="fw-bold">Rs. {product.price}</p>
        <button className="Add-to-Cart text-uppercase" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>

      {/* Modal to display more details about the book */}
      <BookModal
        show={isModalOpen}
        book={product}
        onClose={closeModal}
      />
    </div>
  );
}

export default BCard;
