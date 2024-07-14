
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

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const gradients = document.querySelectorAll('.gradients-container > div');

    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    document.addEventListener('click', () => {
        if (cursor) {
            cursor.classList.add('expand');
            setTimeout(() => cursor.classList.remove('expand'), 500);
        }
    });

    function animateGradients() {
        gradients.forEach((gradient) => {
            gradient.classList.add('animate');
        });
    }

    animateGradients();
});


