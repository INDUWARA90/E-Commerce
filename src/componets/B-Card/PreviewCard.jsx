import React, { useState } from 'react'
import BookModal from '../ProductDetail/Detail';
import './card.css'
function PreviewCard({ product }) {

    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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
            <img src={product.image}

                className="card-img-top"
                alt={product.name}
                onClick={openModal}
            />
            <div className="card-body">
                <p className="b-name">{product.name}</p>
                <p className="fw-bold">Rs.{product.price}</p>
            </div>


            <BookModal
                show={isModalOpen}
                book={product}
                onClose={closeModal}
            />

        </div>
    )
}

export default PreviewCard