export function flashyIntro() {
  console.log("🎨 flashyIntro triggered");

  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255, 0, 0, 0.8)", // bright red overlay
    zIndex: "999999",
    pointerEvents: "none",
  });
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.transition = "opacity 1s ease";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 1000);
    console.log("✨ Overlay removed");
  }, 3000);
}
