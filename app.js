// app.js
export function showUglyUIMessage() {
    console.log("Ugliest UI I've seen.");
}

// Eye-catching function triggered when the page loads
export function flashyIntro() {
    const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
    let i = 0;
    const body = document.body;

    const interval = setInterval(() => {
        body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 400);

    setTimeout(() => {
        clearInterval(interval);
        body.style.backgroundColor = "white";
        console.log("Welcome to the Ugliest (and Flashiest) UI!");
    }, 3000);
}
