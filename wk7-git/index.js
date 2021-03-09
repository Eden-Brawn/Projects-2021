function myClickEvent() {
    alert('the buttin was pressed');
}

function myChange() {
    let element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
}

function myLoad() {
    let element = document.getElementById('circle');
    element.addEventListener('click', myChange);
}

document.addEventListener('DOMContentLoaded', myLoad);