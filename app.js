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
    offset = (offset + 0.2) % 100; // slow and smooth
    header.style.background = `linear-gradient(90deg, #b31b1b ${offset}%, #800000 ${offset + 50}%)`;
    header.style.backgroundClip = "text";
    header.style.webkitBackgroundClip = "text";
    header.style.color = "transparent";
  }, 70);
}
