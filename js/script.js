const body = document.getElementById('body');
const main = document.getElementById('main');
const div = document.createElement('div');
const square = document.createElement('div');
// const row = document.createElement('div');

body.style.backgroundColor = "black";
main.style.backgroundColor = 'grey';
square.setAttribute('class', 'square');
square.setAttribute('style', 'width: 50px; height: 50px; background-color: black; display: inline-block;'); //square is a 50*50 grey blocks that line up
// body.appendChild(main);
main.appendChild(div);
div.setAttribute('id', 'sketchboard');

for(i=0; i < 16; i++){
    let row = document.createElement('div')
    row.setAttribute('class', 'row');
    // row.setAttribute('style', 'margin: auto;')
    sketchboard.appendChild(row);
};

const rowElement = document.getElementsByClassName('row');
rowElement.appendChild(square);
// const sketchboard = document.getElementById('sketchboard');
for (rowElement in div) {
    // row.setAttribute('display', 'block');
    
    for(j=0; j < 16; j++){
        row.appendChild(square);
    }
};

row.style.display = 'block'; //each row is on its own line
// const div = Document.createElement('div');
// const main = Document.createElement('main');
// const body = Document.getElementByName('body');
// html.querySelector(body);
// let main = document.getElementsByTagName('main');

div.style.border = '1px solid white';
// div.style.display = 'grid';

row.style.gridArea = 'row';


col.setAttribute(':hover', "background-color: white");
// div.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, fr); border: 1px solid white');
// div.style.gridTemplateColumns = 'repeat(16, 50px)';
// div.style.gridTemplateRows = '50px repeat(15, 50px)';
// div.style.rowGap = '1px';
// div.style.columnGap = '1px';
// div.style.gridTemplateAreas = 
//     'd1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16'
//     'd17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 d32'
//     'd33 d34 d35 d36 d37 d38 d39 d40 d41 d42 d43 d44 d45 d46 d47 d48'
//     'd49 d50 d51 d52 d53 d54 d55 d56 d57 d58 d59 d60 d61 d62 d63 d64'
//     'd65 d66 d67 d68 d69 d70 d71 d72 d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d'
//     'd d d d d d d d d d d d d d d d';



//     for(i=0; i < 256; i++){
//         div.appendChild('square')
//     }

//     for (square in div) {
//         number = 1;
//         name = 'd' + number;
//         square.setAttribute(name);
//     }


