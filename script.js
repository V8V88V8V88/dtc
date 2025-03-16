// Preloader
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('preloader').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
    }, 500);
  }, 1000);
});

// Scroll animations
window.addEventListener('scroll', function() {
  // Header shrink on scroll
  if (window.scrollY > 100) {
    document.querySelector('header').style.padding = '10px 5%';
    document.querySelector('header').style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    document.getElementById('headerTitle').style.display = 'block';
    setTimeout(function() {
      document.getElementById('headerTitle').style.opacity = '1';
    }, 50);
  } else {
    document.querySelector('header').style.padding = '15px 5%';
    document.querySelector('header').style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    document.getElementById('headerTitle').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('headerTitle').style.display = 'none';
    }, 300);
  }
  
  // Back to top button
  if (window.scrollY > 500) {
    document.getElementById('backToTop').style.opacity = '1';
    document.getElementById('backToTop').style.visibility = 'visible';
  } else {
    document.getElementById('backToTop').style.opacity = '0';
    document.getElementById('backToTop').style.visibility = 'hidden';
  }
  
  // Reveal animations
  const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].style.opacity = '1';
      reveals[i].style.transform = 'translateY(0)';
    }
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    document.getElementById('mobileMenu').style.right = '-100%';
  });
});

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu.style.right === '-100%' || mobileMenu.style.right === '') {
    mobileMenu.style.right = '0';
  } else {
    mobileMenu.style.right = '-100%';
  }
});

// Responsive navigation
function checkScreenSize() {
  if (window.innerWidth <= 768) {
    document.getElementById('menuToggle').style.display = 'block';
    document.querySelector('nav').style.display = 'none';
  } else {
    document.getElementById('menuToggle').style.display = 'none';
    document.querySelector('nav').style.display = 'flex';
    document.getElementById('mobileMenu').style.right = '-100%';
  }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();

// Animation for course cards
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
  });
});

// Animation for department cards
const deptCards = document.querySelectorAll('.dept-card');
deptCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'white';
    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#f8f9fa';
    this.style.boxShadow = 'none';
  });
});

// Animation for stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
  });
});

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  
  for (let i = 0; i < reveals.length; i++) {
    reveals[i].style.opacity = '0';
    reveals[i].style.transition = 'all 0.8s ease';
    
    if (reveals[i].classList.contains('reveal-up')) {
      reveals[i].style.transform = 'translateY(50px)';
    } else if (reveals[i].classList.contains('reveal-left')) {
      reveals[i].style.transform = 'translateX(-50px)';
    } else if (reveals[i].classList.contains('reveal-right')) {
      reveals[i].style.transform = 'translateX(50px)';
    }
    
    // Add delay if specified
    if (reveals[i].dataset.delay) {
      reveals[i].style.transitionDelay = reveals[i].dataset.delay + 's';
    }
  }
  
  // Trigger scroll to initialize animations
  window.dispatchEvent(new Event('scroll'));
});

// Learn more link animation
const learnMoreLinks = document.querySelectorAll('.course-card a');
learnMoreLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.querySelector('span').style.transform = 'translateX(5px)';
  });
  
  link.addEventListener('mouseleave', function() {
    this.querySelector('span').style.transform = 'translateX(0)';
  });
});

// Back to top button
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});