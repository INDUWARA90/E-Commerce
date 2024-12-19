import React from 'react';
import './modal.css'; // Assuming you will style your modal here

function BookModal({ show, book, onClose }) {
  
  //to minimize model
  if (!show==true) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content text-center">
        <button className="close-btn" onClick={onClose}>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>

        </button>
        <div>
          <img src={book.image} alt={book.name} className="modal-img img-resize" />
          <h2>{book.name}</h2>
          <p>{book.description}</p>
          <p className="fw-bold">Rs. {book.price}</p>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
