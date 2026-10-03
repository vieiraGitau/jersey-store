const cartCount = document.getElementById('cart-count');
let count = Number(localStorage.getItem('kickwear-cart-count') || 0);

function updateCartDisplay() {
  if (cartCount) {
    cartCount.textContent = count;
  }
  localStorage.setItem('kickwear-cart-count', count);
}

updateCartDisplay();

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    updateCartDisplay();

    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 900);
  });
});

document.querySelectorAll('.subscribe-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    const input = event.currentTarget.querySelector('input');

    button.textContent = 'Subscribed!';
    button.disabled = true;
    input.value = '';

    setTimeout(() => {
      button.textContent = 'Subscribe';
      button.disabled = false;
    }, 1400);
  });
});

document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    button.textContent = 'Message sent!';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = 'Send message';
      button.disabled = false;
      form.reset();
    }, 1400);
  });
});
