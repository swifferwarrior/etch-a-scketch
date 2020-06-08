const body = document.getElementById('body');
const main = document.getElementById('main');
const div = document.createElement('div');
const square = document.createElement('div');
const menu = document.getElementById('buttons');
const scanline = document.getElementById('scanline');

div.setAttribute('id', 'sketchboard');

display();
grid(16);
// grid(5);
// grid(20);

function display() {
    body.style.backgroundColor = "#93B20E";
    // body.style.backgroundImage = "url('../images/pngkey.com-boarders-png-790045.png')";
    main.style.backgroundColor = 'grey';
    // main.setAttribute('style', 'width: 900px; height: 900px;');
    // div.setAttribute('style', 'width: 900px; height: 900px;');
    // body.setAttribute('style', 'width: auto; height: auto;');
    main.setAttribute('style', 'width: 100%; height: 100%;');
    div.setAttribute('style', 'width: 100%; height: 100%; margin: auto; text-align: center; ');
    main.appendChild(div);
    // main.insertBefore(div, scanline);
    // scanline.setAttribute('style', 'top:')
    sketchboard.setAttribute('style', 'height: 50%;')
    square.setAttribute('class', 'square');

}
function grid(n) {
    let frxHt = (1 / n) * 75;
    let frxWdt = (1 / n) * 65;
    console.log(frxHt);
    sketchboard.innerHTML = "";
    for (i = 0; i < n; i++) { //height
        let row = document.createElement('div')
        row.setAttribute('class', 'row');
        row.setAttribute('style', 'padding: 0.5px; margin: auto;')
        row.style.height = frxHt + "%";
        // row.style.width = "20%";
        for (j = 0; j < n; j++) { //width
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            // square.setAttribute('style', 'width: 20px; height: 20px; background-color: #0F380F; text-align: center; display: inline-block; margin: 1px;'); //square is a 50*50 grey blocks that line up
            square.addEventListener('mouseover', function () {
                square.style.backgroundColor = '#306230';
            });
            row.appendChild(square);
            square.setAttribute('style', 'height: 95%; background-color: #0F380F; text-align: center; display: inline-block; margin: 1px;'); //square is a 50*50 grey blocks that line up
            square.style.width = frxWdt + '%';

            // let rowElement = document.getElementsByClassName('row');
            // let test = 'testing';
            // rowElement.innerHTML = test;
        };
        sketchboard.appendChild(row);

    };

};

let button = document.getElementsByTagName('button');
button[0].addEventListener('click', newGrid);
button[1].addEventListener('click', reset);

function reset() {
    console.log('Resetting');
    button[1].style.border = 'none';
    pass();
    let pixel = document.getElementsByClassName('square');
    for (i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = "#0F380F";
    };
    // grid();
};

function newGrid() {
    // sketchboard.innerHTML = "";
    // console.log('Sending popup');
    // console.log('How many squares?');
    // let number = prompt('How many? _');
    // console.log('Changing grid size to ' + number);
    // grid(number);

    let newDiv = document.createElement('div');
    let howMany = "<p>HOW MANY SQUARES? </p>"
    let value = "<input type='text' id='value' placeholder='_' autofocus>";
    let minmax = "<p>MIN = 1   MAX = 20</p>";
    let gridbutton = document.getElementById('grid');
    let reset = document.getElementById('reset');
    let enter = document.getElementById('enter');

    newDiv.setAttribute('id', 'cursor')
    newDiv = howMany + value + minmax;
    sketchboard.innerHTML = newDiv;
    // menu.innerHTML = enter;
    enter.style.display = 'inline-block';
    reset.style.display = 'none';
    gridbutton.style.display = 'none';
    document.getElementById('enter').addEventListener('click', function () {
        newDiv.innerHTML = "";
        // menu.innerHTML= "";
        // menu.append(gridbutton + reset);
        enter.style.display = 'none';
        reset.style.display = 'inline-block';
        gridbutton.style.display = 'inline-block';
        display();
        grid(document.getElementById('value').value);
    });

    // sketchboard.appendChild(howMany);

    // console.log('Sending popup');
    // console.log('How many squares?');
    // // let number = prompt('How many? _');
    // console.log('Changing grid size to ' + number);
    // grid(caret.value);

}

// function accept(n){
//     console.log(n);
// }


// div.style.border = '1px solid white';


/* getElementsByClassName() returns an HTML collection (array) */
function pass() {
    let audio = new Audio('../images/gameboy_bootup.mp3');
    audio.play();
};

function fail() {
    let audio = new Audio('../images/gb_error.wav');
    audio.play();
};

