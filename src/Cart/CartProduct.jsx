// CartProduct.js
import React from 'react';
import './CartProduct.css'; // Assuming you will add CSS styles for CartProduct
import { incrementQuantity, decrementQuantity, deleteProduct } from '../Data/cart'; // Import necessary actions

function CartProduct({ product, onUpdateCart }) {

  const handleIncrementQuantity = (productId) => {
    incrementQuantity(productId);
    onUpdateCart(); // Update the cart after the quantity is changed
  };

  const handleDecrementQuantity = (productId) => {
    decrementQuantity(productId);
    onUpdateCart(); // Update the cart after the quantity is changed
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
    onUpdateCart(); // Update the cart after the product is deleted
  };

  return (
    <div className="cart-product">
      <img src={product.image} alt={product.productName} className="cart-product-img" />
      <div className="cart-product-details">
        <h5>{product.name}</h5>
        <p className='mt-3'> Rs. {product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>

      <div className='button-container'>

        <div className='qty-buttons mb-2'>
        <button className='plus-button' onClick={() => handleIncrementQuantity(product.id)}>+</button>
        <button className='less-button'onClick={() => handleDecrementQuantity(product.id)}>-</button>
        </div>
        <button className='delete-button' onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>

      </div>

    </div>
  );
}

export default CartProduct;
