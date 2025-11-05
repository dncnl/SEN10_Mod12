console.log("✅ app.js loaded");

export function showUglyUIMessage() {
  alert("Ugliest UI I've seen.");
  console.log("Ugliest UI I've seen.");
}

export function flashyIntro() {
  console.log("🎨 flashyIntro started (permanent RGB mode)");

  const header = document.querySelector("header h1");
  const paragraphs = document.querySelectorAll("p, li");

  let hue = 0;

  // Continuous RGB animation
  setInterval(() => {
    hue = (hue + 1) % 360; // smoothly loop through hues
    const color = `hsl(${hue}, 100%, 50%)`;
    if (header) header.style.color = color;
    paragraphs.forEach((p) => (p.style.color = color));
  }, 60); // adjust speed (lower = faster)

  console.log("🌈 RGB animation active");
}
