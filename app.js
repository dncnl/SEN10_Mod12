// Show a simple alert and log
export function showUglyUIMessage() {
  alert("Welcome to Yale School of Art Demo!");
  console.log("Welcome message displayed.");
}

// Modern header animation with gradient and fade-in effects
export function modernHeaderAnimation() {
  const header = document.querySelector('header');
  const headerTitle = document.querySelector("header h1");
  
  if (header) {
    // Fade in animation for the whole header
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
    }, 100);
  }

  if (headerTitle) {
    // Gradient animation for the title
    headerTitle.style.background = "linear-gradient(90deg, #b31b1b 0%, #800000 100%)";
    headerTitle.style.webkitBackgroundClip = "text";
    headerTitle.style.webkitTextFillColor = "transparent";
    headerTitle.style.backgroundClip = "text";
    headerTitle.style.color = "transparent";
  }
}

// Animate section headings
export function animateSectionHeadings() {
  const headings = document.querySelectorAll('h2');
  headings.forEach((heading, index) => {
    heading.style.opacity = '0';
    heading.style.transform = 'translateX(-20px)';
    heading.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      heading.style.opacity = '1';
      heading.style.transform = 'translateX(0)';
    }, 300 + (index * 200));
  });
}

// Loading screen with spinner
export function showLoadingScreen() {
  const loader = document.createElement('div');
  loader.id = 'loadingScreen';
  loader.innerHTML = `
    <div class="loader-content">
      <h1>Yale School of Art</h1>
      <p>Loading content...</p>
      <div class="spinner"></div>
    </div>
  `;
  document.body.appendChild(loader);

  // Wait for images to fully load, then remove loader
  const images = document.images;
  let loadedCount = 0;

  if (images.length === 0) {
    setTimeout(() => loader.remove(), 1500);
  } else {
    for (let img of images) {
      if (img.complete) loadedCount++;
      else img.addEventListener('load', () => {
        loadedCount++;
        if (loadedCount === images.length) loader.remove();
      });
    }
    // Fallback in case something fails
    setTimeout(() => loader.remove(), 4000);
  }
}

// Initialize navigation inside header
export function initHeaderNav() {
  const header = document.querySelector('header');
  if (!header) return;

  const nav = document.createElement('nav');
  nav.id = 'headerNav';
  nav.innerHTML = `
    <ul>
      <li><a href="#screenshot">Screenshot</a></li>
      <li><a href="#whyUgly">Why Ugly</a></li>
      <li><a href="#improve">Improvements</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  `;
  header.prepend(nav);
}

// Initialize hover effects
export function initHoverEffects() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'translateY(-5px)';
      section.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
    });
    
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'translateY(0)';
      section.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
    });
  });
}
