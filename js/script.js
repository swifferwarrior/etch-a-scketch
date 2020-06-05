const body = document.getElementById('body');
const main = document.getElementById('main');
const div = document.createElement('div');
const square = document.createElement('div');

body.style.backgroundColor = "black";
main.style.backgroundColor = 'grey';
// main.setAttribute('style', 'width: 900px; height: 900px;');
// div.setAttribute('style', 'width: 900px; height: 900px;');
main.setAttribute('style', 'width: auto; height: auto;');
div.setAttribute('style', 'width: auto; height: auto;');
main.appendChild(div);
div.setAttribute('id', 'sketchboard');
square.setAttribute('class', 'square');

for (i = 0; i < 16; i++) {
    let row = document.createElement('div')
    row.setAttribute('class', 'row');
    row.setAttribute('style', 'height: 20px; margin: 1px;')
    for (j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('style', 'width: 20px; height: 20px; background-color: grey; display: inline-block; margin: 1px;'); //square is a 50*50 grey blocks that line up
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'white';
        });
        row.appendChild(square);

        let rowElement = document.getElementsByClassName('row');
        let test = 'testing';
        rowElement.innerHTML = test;
    };
    sketchboard.appendChild(row);
};


div.style.border = '1px solid white';


/* getElementsByClassName() returns an HTML collection (array) */

