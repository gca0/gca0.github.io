document.addEventListener('mousemove', (event) => {
    const trailContainer = document.getElementById('trail');
    const trailDot = document.createElement('div');
    trailDot.classList.add('trail-dot');
    
    const color = generateRandomColor(); // Function to generate random color gradient
    trailDot.style.backgroundColor = color;
    
    trailDot.style.left = event.pageX + 'px';
    trailDot.style.top = event.pageY + 'px';
    
    trailContainer.appendChild(trailDot);
    
    // Remove dot after animation ends
    setTimeout(() => {
        trailDot.remove();
    }, 1000); // Adjust based on the duration of animation
});

function generateRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
}
