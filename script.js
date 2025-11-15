function showSection(id) {
  document.querySelectorAll('main section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function addToCart(item) {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(item);
  localStorage.setItem('orders', JSON.stringify(orders));
  alert(item + ' added to Orders');
  showOrders();
}

function addToWishlist(item) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist.push(item);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(item + ' added to Wishlist');
  showWishlist();
}

function showOrders() {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  document.getElementById('orderList').innerHTML = orders.map(o => '<li>' + o + '</li>').join('');
}

function showWishlist() {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  document.getElementById('wishlistItems').innerHTML = wishlist.map(w => '<li>' + w + '</li>').join('');
}

function registerUser() {
  let name = document.getElementById('regName').value;
  let email = document.getElementById('regEmail').value;
  let password = document.getElementById('regPassword').value;
  if (!email.includes('@')) {
    alert('Enter a valid email');
    return false;
  }
  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Registration successful!');
  return false;
}

function loginUser() {
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user.email === email && user.password === password) {
    alert('Login successful!');
  } else {
    alert('Invalid credentials');
  }
  return false;
}

function sendMessage() {
  let name = document.getElementById('contactName').value;
  let msg = document.getElementById('contactMsg').value;
  document.getElementById('contactResponse').innerText = 'Thank you, ' + name + '! Your message has been sent.';
  return false;
}

showOrders();
showWishlist();
