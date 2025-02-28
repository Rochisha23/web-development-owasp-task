document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    body.appendChild(overlay);
    
    // Toggle desktop dropdowns
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close other open dropdowns
        dropdownToggles.forEach(otherToggle => {
          if (otherToggle !== toggle && otherToggle.classList.contains('active')) {
            otherToggle.classList.remove('active');
            otherToggle.nextElementSibling.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        toggle.classList.toggle('active');
        toggle.nextElementSibling.classList.toggle('active');
      });
    });
    
    // Toggle mobile dropdowns
    mobileDropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Toggle the arrow direction
        const arrow = toggle.querySelector('.arrow');
        arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        
        // Toggle dropdown menu
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('active');
      });
    });
    
    // Open mobile menu
    mobileMenuToggle.addEventListener('click', () => {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
      body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    // Close mobile menu
    closeMenuBtn.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
      
      // Reset mobile dropdowns when menu is closed
      mobileDropdownToggles.forEach(toggle => {
        const arrow = toggle.querySelector('.arrow');
        arrow.style.transform = 'rotate(0deg)';
        toggle.nextElementSibling.classList.remove('active');
      });
    });
    
    // Close mobile menu when clicking overlay
    overlay.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
      
      // Reset mobile dropdowns when menu is closed
      mobileDropdownToggles.forEach(toggle => {
        const arrow = toggle.querySelector('.arrow');
        arrow.style.transform = 'rotate(0deg)';
        toggle.nextElementSibling.classList.remove('active');
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      // For desktop dropdowns
      if (!e.target.closest('.dropdown')) {
        dropdownToggles.forEach(toggle => {
          toggle.classList.remove('active');
          toggle.nextElementSibling.classList.remove('active');
        });
      }
    });
  });