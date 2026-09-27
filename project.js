const quoteButton = document.getElementById('quoteButton');
const exploreButton = document.getElementById('exploreButton');
const contactButton = document.getElementById('contactButton');
const navLinks = document.querySelectorAll('.nav-link');
const heroPanel = document.querySelector('.hero-panel');
const heroBadge = document.querySelector('.hero-badge');
const serviceCards = document.querySelectorAll('.contain .cardx');
const revealSections = document.querySelectorAll('.service-content, .About-us, .projects');
const actionButtons = document.querySelectorAll('.button, .project-btn, .About-btn, .nav-button');
const slides = document.querySelectorAll('.hero-slide');
const slideDots = document.querySelectorAll('.hero-slider__dot');
let currentSlide = 0;
let slideInterval;

function showMessage(message) {
  window.alert(message);
}

function bounceButton(element) {
  element.classList.add('button-bounce');
  setTimeout(() => {
    element.classList.remove('button-bounce');
  }, 280);
}

function animateElement(element, delayClass) {
  if (!element) return;
  element.classList.add('animate-appear', delayClass);
}

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === index);
  });

  slideDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
  });

  currentSlide = index;
}

function startHeroSlider() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }, 5000);
}

window.addEventListener('DOMContentLoaded', () => {
  animateElement(heroPanel, 'delay-1');
  animateElement(heroBadge, 'delay-2');

  serviceCards.forEach((card, index) => {
    const delay = `delay-${Math.min(index + 1, 4)}`;
    animateElement(card, delay);
  });

  revealSections.forEach((section, index) => {
    const delay = `delay-${Math.min(index + 2, 4)}`;
    animateElement(section, delay);
  });

  heroBadge.classList.add('pulse');
  setTimeout(() => heroBadge.classList.remove('pulse'), 9000);

  if (slides.length) {
    showSlide(0);
    startHeroSlider();
  }
});

slideDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.slide);
    showSlide(index);
    startHeroSlider();
  });
});

quoteButton.addEventListener('click', () => {
  bounceButton(quoteButton);
  showMessage('Thanks! We will contact you shortly for a quote.');
});

exploreButton.addEventListener('click', () => {
  bounceButton(exploreButton);
  showMessage('Opening the portfolio section for premium project examples.');
});

contactButton.addEventListener('click', () => {
  bounceButton(contactButton);
  showMessage('Your contact request is sent. A specialist will follow up soon.');
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    navLinks.forEach((item) => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
  });
});

actionButtons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px) scale(1.01)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});
