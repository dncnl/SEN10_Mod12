// Show a simple alert and log
export function showUglyUIMessage() {
  alert("Welcome to Yale School of Art Demo!");
  console.log("Welcome message displayed.");
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
  setTimeout(() => loader.remove(), 2000);
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

// Modern subtle gradient animation for header text
export function modernHeaderAnimation() {
  const header = document.querySelector("header h1");
  if (!header) return;

  let offset = 0;
  setInterval(() => {
    offset = (offset + 0.2) % 100; // slower and smoother
    header.style.background = `linear-gradient(90deg, #b31b1b ${offset}%, #800000 ${offset + 50}%)`;
    header.style.backgroundClip = "text";
    header.style.webkitBackgroundClip = "text";
    header.style.color = "transparent";
  }, 70);
}

// Subtle pulse animation for section headings
export function animateSectionHeadings() {
  const headings = document.querySelectorAll("section h2");
  headings.forEach((h2) => {
    h2.style.transition = "transform 2s ease-in-out, color 2s ease-in-out";
    let growing = true;
    setInterval(() => {
      if (growing) {
        h2.style.transform = "scale(1.02)";
        h2.style.color = "#b31b1b";
      } else {
        h2.style.transform = "scale(1)";
        h2.style.color = "#222";
      }
      growing = !growing;
    }, 3000); // slower and subtle
  });
}
