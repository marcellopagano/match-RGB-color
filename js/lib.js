// object declarations
const constD = {
    cell: document.getElementsByClassName('cell'),
    startBtn: document.getElementById('startBtn'),
    newGame: document.getElementById('newGame'),
    questionDisplay: document.getElementById("question"),
    answerDisplay: document.getElementById("fadeText"),
    answerDisplayT: document.getElementById("answerT"),
    answerDisplayF: document.getElementById("answerF"),
    winMessage: document.getElementById("winMessage"),
    answerT: 0,
    answerF: 0,
    gameOver: false,
    colorMatch: false,
    question: '',
    answer: '',
    rgbCells: []
};
// fn to display all cells
function displayAllCells() {
    Array.from(constD.cell).forEach(el => {
        el.style.visibility = 'visible';
    });
}
// fn init colors
function initColors() {
    Array.from(constD.cell).forEach(el => {
        el.style.backgroundColor = `rgb(${rnd()},${rnd()},${rnd()})`;
        constD.rgbCells.push(el.style.backgroundColor);
    });
}
// fn random number to apply to rgb code
function rnd() {
    return Math.random() * 256 | 0;
    // return Math.floor(Math.random() * (256 - 0) + 0);
}
// fn check win condition
function checkWin() {
    if (constD.answerT >= constD.answerF + 5) {
        constD.gameOver = true;
        constD.winMessage.style.display = 'flex';
        constD.startBtn.style.display = 'none';
        // audio win
        audio.Win.play();
    }
}
// object audio
const audio = {
    Cell: new Audio('./sound/cell.mp3'),
    CellError: new Audio('./sound/cellError.mp3'),
    CellHover: new Audio('./sound/cellHover.mp3'),
    Button: new Audio('./sound/button.mp3'),
    Win: new Audio('./sound/win.mp3')
}

// fn init question rgb color
function initQuestion() {
    constD.question = constD.rgbCells[Math.random() * constD.rgbCells.length | 0];
    // question = rgbCells[Math.floor(Math.random() * rgbCells.length)];
    constD.questionDisplay.innerText = constD.question.toUpperCase();
}

export { constD, displayAllCells, initColors, rnd, checkWin, audio, initQuestion };