
/* Reaction Time Game
    - in 800x800 div
    - boxes are buttons with:
        - random size (min max)
        - random shape controlled by border radius
        - random color
        - random location in div controlled by offset
    - start timer when shape appears
    - stop timer when shape clicked
    - destroy shape when clicked
    - short delay then new shape
    - 10 shapes per round
    -






 */

class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

const playArea = document.getElementById("shapeField");
const playAreaWidth = playArea.getBoundingClientRect().width;
const playAreaHeight = playArea.getBoundingClientRect().height;

let buttonToShape = document.getElementById('clickshape');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    let symbols = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return color;
}

// function getRandomLocation(width, height) {
//     let rightBounds = document.getElementById('shapeField').width;
//     let bottomBounds = document.getElementById('shapeField').height;
//
//     let posX = Math.floor(Math.random() * (rightBounds - width/2) + width/2);
//     let posY = Math.floor(Math.random() * (bottomBounds - height/2) + height/2);
//
//     console.log(posX, posY);
//     return new Vector2D(posX, posY);
// }

function getRandomBorderRadius(width, height) {
    let smallDimension = Math.min(width, height);
    return Math.floor(Math.random() * smallDimension);
}

function setShape() {
    let loadShape = buttonToShape;
    loadShape.style.width = "200px";
    loadShape.style.height = "200px";
    loadShape.style.borderRadius = "5px";
    loadShape.style.position = "relative";

    loadShape.style.backgroundColor = getRandomColor();

    const leftOffset = playAreaWidth/2 - 100;
    const topOffset = playAreaHeight/2 - 200;


    loadShape.style.left = leftOffset + 'px';
    loadShape.style.top = topOffset + 'px';
}

function newShape() {
    let width = getRandomInt(100, 300);
    let height = getRandomInt(100, 300);
    let randomShape = buttonToShape

    randomShape.style.width = width + 'px';
    randomShape.style.height = height + 'px';
    randomShape.style.borderRadius = getRandomBorderRadius(width, height) + 'px';
    randomShape.style.position = "relative";
    randomShape.style.backgroundColor = getRandomColor();

    const leftOffset = Math.floor(Math.random() * (playAreaWidth - width/2) + width/2);//playAreaWidth/2 - 100;
    const topOffset = Math.floor(Math.random() * (playAreaHeight - height/2) + height/2);//playAreaHeight/2 - 200;
    
    randomShape.style.left = leftOffset + 'px';
    randomShape.style.top = topOffset + 'px';



}
setShape();
buttonToShape.addEventListener('click', newShape);

