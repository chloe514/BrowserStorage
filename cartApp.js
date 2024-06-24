// Initialize cart in localStorage if it doesn't exist
function initializeCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  
  // Add an item to the cart
  function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Remove an item from the cart by id
  function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Display the cart contents in the console
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
  }
  
  // Initialize the cart when the script loads
  initializeCart();
  
  // Event listener for the add item form
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    
    const item = {
      id: Date.now(),
      name: itemName,
      price: itemPrice
    };
    
    addItem(item);
  
    // Clear the form inputs
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
  });
  
  // Event listener for the display cart button
  document.getElementById('displayCartButton').addEventListener('click', displayCart);
  
