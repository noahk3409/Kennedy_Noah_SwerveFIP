console.log("JS file connected");

// Open lightbox
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
      const target = product.getAttribute('data-lightbox');
      document.querySelector(`.lightbox[data-box="${target}"]`).style.display = 'flex';
    });
  });
  
  // Close lightbox when clicking close button or background
  document.querySelectorAll('.lightbox').forEach(box => {
    box.addEventListener('click', e => {
      if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) {
        box.style.display = 'none';
      }
    });
  });