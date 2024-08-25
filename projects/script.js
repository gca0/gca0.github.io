// gradient background
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
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

// cursor effects
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
});

// cursor effects on mouse out
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// animated text appears upon becoming visible on page
document.addEventListener("DOMContentLoaded", function() {
    const moodmixText = document.querySelector('.moodmix-text');
    const gojobotText = document.querySelector('.gojobot-text');
    
    const observerOptions = {
        threshold: 0.1 // Adjust this threshold as needed
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    if (moodmixText) observer.observe(moodmixText);
    if (gojobotText) observer.observe(gojobotText);
});

