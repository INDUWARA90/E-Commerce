import React, { useState } from 'react';
import { getCart, getTotal, clearCart } from '../Data/cart'; // Import necessary cart functions
import CartProduct from './CartProduct';

function BookStore() {
  const [cart, setCart] = useState(getCart());

  // Function to update the cart (re-trigger the re-render)
  const handleUpdateCart = () => {
    setCart([...getCart()]); // This will update the state with the latest cart data
  };

  // Function to handle clearing the entire cart
  const handleClearCart = () => {
    clearCart(); // Clear all items from the cart
    handleUpdateCart(); // Trigger re-render after clearing the cart
  };

  // Function to handle Checkout process
  const handleCheckout=()=>{
    cart.forEach((element)=>{
      console.log(element);
      
    })
  }

  return (
    <div>
      <h1>Book Store</h1>

      <div>
        <h2>Cart</h2>
        {/* Check if there are items in the cart */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {/* Loop through cart items and render CartProduct for each item */}
            {cart.map((item) => (
              <CartProduct
                key={item.id}  // Ensure each product is uniquely identified by id
                product={item}  // Pass product details to CartProduct
                onUpdateCart={handleUpdateCart}  // Pass the update handler to update cart after any changes
              />
            ))}
          </div>
        )}
        <p>Total: Rs.{getTotal()}</p>
      </div>

      {/* Clear Cart Button */}
      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default BookStore;
