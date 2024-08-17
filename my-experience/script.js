document.querySelectorAll('.panel-header').forEach(header => {
    header.addEventListener('click', function() {
        const panel = this.parentElement;
        panel.classList.toggle('open');
    });
});

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

// typewriter effect

const words = ['hi, it\'s nice to meet you!', 'hi, it\'s nice to meet you!'];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    document.getElementById('word').classList.add('visible'); // Make text visible when typing starts
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            // Wait for 5 seconds before starting to delete
            setTimeout(deletingEffect, 5000);
            return false;
        }
        timer = setTimeout(loopTyping, 200);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            document.getElementById('word').classList.remove('visible'); // Hide text when it is fully deleted
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 200);
    };
    loopDeleting();
}

typingEffect();

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