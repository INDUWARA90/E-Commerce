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
        <h5>{product.productName}</h5>
        <p>Rs. {product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
      <button onClick={() => handleIncrementQuantity(product.id)}>+</button>
      <button onClick={() => handleDecrementQuantity(product.id)}>-</button>
      <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
    </div>
  );
}

export default CartProduct;
