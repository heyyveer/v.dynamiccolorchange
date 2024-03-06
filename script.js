document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const body = document.querySelector('body');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor(event) {
        const clickedBox = event.target;
        const color = window.getComputedStyle(clickedBox).getPropertyValue('background-color');
        body.style.backgroundColor = color;
    }


    boxes.forEach(box => {
        const color = getRandomColor();
        box.style.backgroundColor = color;
        box.addEventListener('click', changeBackgroundColor);
    });
});
