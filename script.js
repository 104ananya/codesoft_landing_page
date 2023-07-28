// Function to handle class registration
function registerClass(classId) {
    // In a real application, you might perform further actions here, like displaying a modal or sending data to a server.
    alert(`You have registered for Class ${classId}.`);
  }
  
  // Animation for the hero section on page load
  function animateHero() {
    const heroSection = document.getElementById('hero');
    heroSection.classList.add('animate');
  }
  
  // Wait for the page to load before triggering the animation
  window.addEventListener('load', animateHero);

  


// Function to handle smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target);
    });
  });
  
  // Show or hide the scroll-to-top button based on the scroll position
  window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY >= 500) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to top when the scroll-to-top button is clicked
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('#hero');
  });
  


// Form validation for the contact form
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateName()) {
    nameError.textContent = 'Please enter your name.';
    nameInput.focus();
  } else {
    nameError.textContent = '';
  }

  if (!validateEmail()) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.focus();
  } else {
    emailError.textContent = '';
  }

  if (!validateMessage()) {
    messageError.textContent = 'Please enter your message.';
    messageInput.focus();
  } else {
    messageError.textContent = '';
  }

  if (validateName() && validateEmail() && validateMessage()) {
    // Form validation passed, you can proceed with form submission here
    alert('Your message has been submitted successfully.');
    contactForm.reset();
  }
});

// Function to validate name
function validateName() {
  const nameValue = nameInput.value.trim();
  return nameValue !== '';
}

// Function to validate email address using regular expression
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailValue);
}

// Function to validate message
function validateMessage() {
  const messageValue = messageInput.value.trim();
  return messageValue !== '';
}
