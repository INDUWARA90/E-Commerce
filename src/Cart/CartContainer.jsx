import React, { useState } from 'react';
import { getCart, getTotal, clearCart } from '../Data/cart'; // Import necessary cart functions
import CartProduct from './CartProduct';
import './cartcontainer.css'
import Swal from 'sweetalert2'

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

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Currently On Devolpment!",
    });

  }

  return (
    <div className='container container-card-outer'>
      <h1 className='text-center mb-5'>Products On The Cart</h1>

      <div>
        {/* Check if there are items in the cart */}
        {cart.length === 0 ? (
          <h5 className='text-center'>Your cart is empty.</h5>
        ) : (
          <div>
            {/* Loop through cart items and render CartProduct for each item */}
            {cart.map((item) => (
              <CartProduct
                key={item.id}  
                product={item} 
                onUpdateCart={handleUpdateCart} 
              />
            ))}
          </div>
        )}
        
      </div>

      <div className='text-center m-5'>
          <h3>Total:<span className='price'> Rs.{getTotal()}</span></h3>        
      </div>

      {/* Clear Cart & Checkout Button */}
      <div className='buttons-container'>
      <button onClick={handleClearCart} className='clear-btn'>Clear Cart</button>
      <button onClick={handleCheckout}  className='checkout-btn'>Checkout</button>
      </div>
     
    </div>
  );
}

export default BookStore;
