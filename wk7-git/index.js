function myClickEvent() {
    alert('the buttin was pressed');
}

function myChange() {
    let element = document.getElementById('circle');
    let circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;
}

function myLoad() {
    let element = document.getElementById('circle');
    element.addEventListener('click', myChange);
    element.style.opacity = '0.5';
}

document.addEventListener('DOMContentLoaded', myLoad);