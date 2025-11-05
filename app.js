console.log("✅ app.js loaded");

export function showUglyUIMessage() {
  alert("Welcome to Yale School of Art Demo!");
  console.log("Welcome message displayed.");
}

// Loading screen animation
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

  // Simulate loading (2 seconds)
  setTimeout(() => {
    loader.remove();
  }, 2000);
}

// Modern red header navigation
export function initHeaderNav() {
  const header = document.querySelector('header');
  if (!header) return;

  const nav = document.createElement('nav');
  nav.id = 'headerNav';
  nav.innerHTML = `
    <ul>
      <li><a href="#whyUgly">Why Ugly</a></li>
      <li><a href="#improve">Improvements</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  `;
  header.prepend(nav);
}
