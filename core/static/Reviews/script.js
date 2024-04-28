document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');
  
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const review = document.getElementById('review').value;
  
      // Create new review element
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.innerHTML = `
        <h3>${name}</h3>
        ${email ? `<p>Email: ${email}</p>` : ''}
        <p>${review}</p>
      `;
  
      // Add new review to reviews list
      reviewsList.appendChild(reviewElement);
  
      // Reset form fields
      reviewForm.reset();
    });
  });
  