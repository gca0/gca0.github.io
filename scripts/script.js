document.addEventListener('mousemove', (event) => {
    const blob = document.querySelector('.blob');
    blob.style.left = event.pageX + 'px';
    blob.style.top = event.pageY + 'px';
});
