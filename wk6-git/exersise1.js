function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

print5();
print5();

function updateH1() {/*This function looks for the elements in html and then updates the contents of the tags their in*/
    let element = document.getElementById('idheader');
    element.firstChild.nodeValue = 'NEW HEADING';
}
function updateParagraph() {/*This updates the paragraph to 'New paragraph' */
    let element = document.getElementById('idp');
    element.firstChild.nodeValue = 'New paragraph';
}
function loadFunction() {/*This listens for when the header or paragraph has been clicked then calls updateH1 or updateParagraph */
    let header = document.getElementById('idheader');
    header.addEventListener('click', updateH1);

    let paragraph = document.getElementById('idp');
    paragraph.addEventListener('click', updateParagraph);
}

document.addEventListener('DOMContentLoaded', loadFunction); /*This listens for when the action in '' happens to call loadFunction */

/*'DOMContentLoaded' listens for when content on the page has been loaded to call header
    'click' listens for when a click anywhere on the page has happened to call header */