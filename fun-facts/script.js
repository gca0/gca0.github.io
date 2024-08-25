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

// fade-in/fade-out scroll effect
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const section = entry.target.closest('section');
            if (entry.isIntersecting) {
                section.classList.add('visible');
                section.classList.remove('fade-out');
            } else {
                section.classList.add('fade-out');
                section.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        const title = section.querySelector('#fader');
        if (title) {
            observer.observe(title);
        }
    });
});










