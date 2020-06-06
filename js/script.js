const body = document.getElementById('body');
const main = document.getElementById('main');
const div = document.createElement('div');
const square = document.createElement('div');

body.style.backgroundColor = "#93B20E";
// body.style.backgroundImage = "url('../images/pngkey.com-boarders-png-790045.png')";
main.style.backgroundColor = 'grey';
// main.setAttribute('style', 'width: 900px; height: 900px;');
// div.setAttribute('style', 'width: 900px; height: 900px;');
// body.setAttribute('style', 'width: auto; height: auto;');
main.setAttribute('style', 'width: 100%; height: 100%;');
div.setAttribute('style', 'width: 100%; height: 100%; margin: auto; text-align: center; ');
main.appendChild(div);
div.setAttribute('id', 'sketchboard');
sketchboard.setAttribute('style', 'height: 50%;')
square.setAttribute('class', 'square');

for (i = 0; i < 16; i++) {
    let row = document.createElement('div')
    row.setAttribute('class', 'row');
    row.setAttribute('style', 'height: 5%; margin: 2px; margin: auto;')
    for (j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        // square.setAttribute('style', 'width: 20px; height: 20px; background-color: #0F380F; text-align: center; display: inline-block; margin: 1px;'); //square is a 50*50 grey blocks that line up
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = '#306230';
        });
        row.appendChild(square);
        square.setAttribute('style', 'width: 5%; height: 95%; background-color: #0F380F; text-align: center; display: inline-block; margin: 1px;'); //square is a 50*50 grey blocks that line up

        let rowElement = document.getElementsByClassName('row');
        // let test = 'testing';
        // rowElement.innerHTML = test;
    };
    sketchboard.appendChild(row);
};

let button = document.getElementsByTagName('button');
button[0].addEventListener('click', reset);

function reset() {
    console.log('Resetting');
    button[0].style.border = 'none';
    let audio = new Audio('../images/gameboy_bootup.mp3');
    audio.play();
    let pixel = document.getElementsByClassName('square');
    for (i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = "#0F380F";
    };
}


// div.style.border = '1px solid white';


/* getElementsByClassName() returns an HTML collection (array) */

