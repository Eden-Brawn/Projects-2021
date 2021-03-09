function myClickEvent() {
    alert('the buttin was pressed');
}

function myChange() {
    let element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
    element.style.opacity = '1';
}

function myLoad() {
    let element = document.getElementById('circle');
    element.addEventListener('click', myChange);
    element.style.opacity = '0.5';
}

document.addEventListener('DOMContentLoaded', myLoad);