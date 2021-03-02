function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

print5();
print5();

function header() {
    var element = document.getElementById('idheader');
    element.firstChild.nodeValue = 'NEW HEADING';

    var element = document.getElementById('idp');
    element.firstChild.nodeValue = 'New paragraph';
}

document,addEventListener('click', header);

/*'DOMContentLoaded' listens for when content on the page has been loaded to call header
    'click' listens for when a click on the page has happened to call header */