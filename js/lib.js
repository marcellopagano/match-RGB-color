// fn to display all cells
function displayAllCells() {
    Array.from(cell).forEach(el => {
        el.style.visibility = 'visible';
    });
}
// fn init colors
function initColors() {
    Array.from(cell).forEach(el => {
        el.style.backgroundColor = `rgb(${rnd()},${rnd()},${rnd()})`;
        rgbCells.push(el.style.backgroundColor);
    });
}
// fn random number to apply to rgb code
function rnd() {
    return Math.random() * 256 | 0;
    // return Math.floor(Math.random() * (256 - 0) + 0);
}
// fn init question rgb color
function initQuestion() {
    question = rgbCells[Math.random() * rgbCells.length | 0];
    // question = rgbCells[Math.floor(Math.random() * rgbCells.length)];
    questionDisplay.innerText = question.toUpperCase();
    console.log(question, rgbCells);
}

function checkWin() {
    if (answerT >= answerF + 5) {
        gameOver = true;
        winMessage.style.display = 'flex';
        // audio win
        audio.Win.play();
    }
}
// object audio
const audio = {
    Cell : new Audio('./sound/cell.mp3'),
    CellError : new Audio('./sound/cellError.mp3'),
    CellHover : new Audio('./sound/cellHover.mp3'),
    Button : new Audio('./sound/button.mp3'),
    Win : new Audio('./sound/win.mp3')
} 