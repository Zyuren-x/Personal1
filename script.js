document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const logo = document.querySelector('.logo');
    const homeLink = document.querySelector('.navbar a[href="#home"]');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active')); // Remove from all
        this.classList.add('active'); // Add to clicked one
      });
    });
  
    // Optional: Toggle navbar menu for mobile
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  });
  
