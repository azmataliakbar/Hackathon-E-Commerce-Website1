

// Add item to cart
/* const addItemToCart = async (productId, quantity) => {
  const response = await fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add authentication headers if required
    },
    body: JSON.stringify({ productId, quantity }),
  });

  if (response.ok) {
    const cartData = await response.json();
    setCart(cartData);
  } else {
    // Handle error
  }
}; */

// Remove item from cart
/* const removeItemFromCart = async (productId) => {
  const response = await fetch(`/api/cart/${productId}`, {
    method: 'DELETE',
    headers: {
      // Add authentication headers if required
    },
  });

  if (response.ok) {
    const cartData = await response.json();
    setCart(cartData);
  } else {
    // Handle error
  }
}; */