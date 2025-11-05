export function showUglyUIMessage() {
  console.log("Ugliest UI I've seen.");
}

export function flashyIntro() {
  console.log("🎨 flashyIntro is running...");

  // Create a temporary overlay that flashes colors above the gradient
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.zIndex = "9999";
  overlay.style.pointerEvents = "none";
  overlay.style.transition = "background-color 0.3s ease";
  overlay.style.opacity = "0.9";
  document.body.appendChild(overlay);

  const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
  let i = 0;

  const interval = setInterval(() => {
    overlay.style.backgroundColor = colors[i] + "cc"; // cc = semi-transparent
    i = (i + 1) % colors.length;
  }, 400);

  // Fade it out after 3 seconds
  setTimeout(() => {
    clearInterval(interval);
    overlay.style.transition = "opacity 1s ease";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 1000);
    console.log("✨ Welcome to the Ugliest (and Flashiest) UI!");
  }, 3000);
}
