function myInterval() {
    let element = document.getElementById('circle');
    let circleOpacity = parseFloat(element.style.opacity); /*parseFloat retuns a string as a decimal number parseInt returns a whole number*/
    element.style.opacity = circleOpacity - 0.1;
}

function myInterval() {
    setInterval(myClickEvent, 1000);/*1000 = 1 second*/
}

function myLoad() {
    let element = document.getElementById('circle');
    element.addEventListener('click', myChange);
    element.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', myLoad);
/*different events include:
DOMContentLoaded
click
mouseenter
mouseleave
keyup
keydown
*/