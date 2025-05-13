document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) { // Ensure both elements exist
      navToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
      });
  }
});
  