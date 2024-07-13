document.addEventListener('mousemove', (event) => {
    const blob = document.querySelector('.blob');
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    blob.style.left = mouseX + 'px';
    blob.style.top = mouseY + 'px';
});
