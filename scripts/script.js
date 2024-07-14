const cursor = document.querySelector(".cursor");
var timeout;
var trails = [];

// follow cursor on mouse move
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // create trail element
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.top = `${y}px`;
    trail.style.left = `${x}px`;
    trail.style.backgroundColor = cursor.style.backgroundColor; // inherit cursor color
    document.body.appendChild(trail);
    trails.push(trail); // store trail element

    // limit trails to 15 elements
    if (trails.length > 15) {
        const removedTrail = trails.shift();
        removedTrail.parentNode.removeChild(removedTrail);
    }

    // cursor effects on mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// cursor effects on mouse out
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// clear trails on page refresh
window.addEventListener("beforeunload", () => {
    trails.forEach(trail => trail.remove());
});
