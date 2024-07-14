
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");
var timeout;

// create trail elements
const trail = document.createElement("div");
trail.classList.add("trail");
body.appendChild(trail);

// follow cursor on mouse move
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    // update trail position
    trail.style.left = x + "px";
    trail.style.top = y + "px";

    // update trail color to match cursor color
    let cursorColor = getComputedStyle(cursor).getPropertyValue("background-color");
    trail.style.backgroundColor = cursorColor;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // // cursor effects on mouse stopped
    // function mouseStopped() {
    //     cursor.style.display = "none";

    // }
    // clearTimeout(timeout);
    // timeout = setTimeout(mouseStopped, 1000);

} );

// cursor effects on mouse out
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
})



