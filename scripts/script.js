document.addEventListener('mousemove', (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    const light = document.createElement('div');
    light.className = 'light';
    light.style.left = mouseX + 'px';
    light.style.top = mouseY + 'px';
    
    document.body.appendChild(light);
    
    setTimeout(() => {
        light.remove();
    }, 2000); // Remove the light element after 2 seconds
});
