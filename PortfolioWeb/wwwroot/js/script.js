// ============================================
// LOADING BAR ANIMATION
// ============================================
window.addEventListener('load', () => {
  const loadingBar = document.getElementById('loadingBar');
  loadingBar?.classList.add('complete');
  setTimeout(() => loadingBar?.remove(), 1000);
});

// Simulate page loading
const loadingBar = document.getElementById('loadingBar');
if (loadingBar) {
  loadingBar.style.width = '70%';
  setTimeout(() => {
    loadingBar.style.width = '90%';
  }, 500);
}

// ============================================
// BURGER MENU TOGGLE
// ============================================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// PROJECT CAROUSEL CONTROLS
// ============================================
const carousel = document.getElementById('projectCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carousel && prevBtn && nextBtn) {
  const scrollAmount = 350; // Card width + gap

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (carousel === document.activeElement || carousel.contains(document.activeElement)) {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    }
  });
}

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// ============================================
// SKILL BADGES ANIMATION
// ============================================
const skillBadges = document.querySelectorAll('.skill-badge');
skillBadges.forEach((badge, index) => {
  badge.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// CARD ANIMATION ON LOAD
// ============================================
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.15}s`;
});

// ============================================
// ACTIVE LINK HIGHLIGHT
// ============================================
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links li a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
      link.style.color = 'var(--primary)';
    }
  });
});

// ============================================
// MOUSE FOLLOW EFFECT ON HERO (Optional)
// ============================================
const hero = document.querySelector('.hero');
if (hero) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    hero.style.backgroundPosition = `${x}% ${y}%`;
  });
}

// ============================================
// AOS - ANIMATE ON SCROLL (Simple version)
// ============================================
const revealElements = document.querySelectorAll('[data-animate]');
const revealOptions = {
  threshold: 0.15,
};

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = `fadeInUp 0.6s ease-out`;
      revealOnScroll.unobserve(entry.target);
    } else {
      entry.target.style.opacity = '0';
    }
  });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

console.log('✨ Portfolio animations loaded!');

