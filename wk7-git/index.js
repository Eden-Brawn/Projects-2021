function myClickEvent() {
    alert('the buttin was pressed');
}

function myChange() {
    let element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
    element.style.opacity = '0.5';
}

function myLoad() {
    let element = document.getElementById('circle');
    element.addEventListener('click', myChange);
    element.addEventListener('click', myClickEvent);
}

document.addEventListener('DOMContentLoaded', myLoad);