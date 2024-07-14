
// const cursor = document.querySelector(".cursor");
// var timeout;

// // follow cursor on mouse move
// document.addEventListener("mousemove", (e) => {
//     let x = e.pageX;
//     let y = e.pageY;

//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display = "block";

//     // // cursor effects on mouse stopped
//     // function mouseStopped() {
//     //     cursor.style.display = "none";

//     // }
//     // clearTimeout(timeout);
//     // timeout = setTimeout(mouseStopped, 1000);

// } );

// // cursor effects on mouse out
// document.addEventListener("mouseout", () => {
//     cursor.style.display = "none";
// })

import '/styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});



