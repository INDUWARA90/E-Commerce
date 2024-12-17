let cart = [];

// Function to add product to the cart
export const addToCart = (product) => {
  // Check if the product already exists in the cart by matching the product's id
  const existingProduct = cart.find(item => item.id === product.id); 

  if (existingProduct) {
    // If the product exists, increment its quantity
    existingProduct.quantity += 1;
  } else {
    // If the product doesn't exist, add it to the cart with a quantity of 1
    cart.push({...product, quantity: 1});
  }
};

// Function to remove a product from the cart by its unique id
export const removeFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
};

// Function to increment the quantity of a product in the cart
export const incrementQuantity = (productId) => {
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity += 1;
  }
};

// Function to decrement the quantity of a product in the cart
export const decrementQuantity = (productId) => {
  const product = cart.find(item => item.id === productId);
  if (product && product.quantity > 1) {
    product.quantity -= 1;
  }
};

// Function to completely remove a product from the cart if its quantity reaches 0
export const deleteProduct = (productId) => {
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }
};

// Function to clear the entire cart
export const clearCart = () => {
  cart = []; // Clear all products from the cart
};

// Function to get the current cart
export const getCart = () => {
  return cart;
};

// Function to get the total price of items in the cart (taking quantity into account)
export const getTotal = () => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export default cart;
