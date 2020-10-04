'use strict';
// init declarations
const cell = document.getElementsByClassName('cell'),
    startBtn = document.getElementById('startBtn'),
    resetScore = document.getElementById('resetScore'),
    questionDisplay = document.getElementById("question"),
    answerDisplay = document.getElementById("fadeText"),
    answerDisplayT = document.getElementById("answerT"),
    answerDisplayF = document.getElementById("answerF"),
    winMessage = document.getElementById("winMessage");
let answerT = 0,
    answerF = 0,
    gameOver = false,
    colorMatch = false,
    rgbCells = [],
    question = '',
    answer = '';
// score reset event
resetScore.addEventListener('click', () => {
    // audio button click
    audio.Button.play();
    // reset var
    gameOver = false;
    answerT = 0;
    answerF = 0;
    answerDisplayT.textContent = answerT;
    answerDisplayF.textContent = answerF;
    winMessage.style.display = 'none';
});
// start event new RGB color 
startBtn.addEventListener('click', () => {
    // check win game 
    if (gameOver === true) {
        return;
    }
    // audio button click
    audio.Button.play();
    // reset var
    rgbCells = [];
    colorMatch = false;
    startBtn.style.display = 'none';
    // init call fn
    displayAllCells();
    initColors();
    initQuestion();
});
// main
const init = () => {
    // container count and answer(true/false)  
    answerDisplayT.textContent = answerT;
    answerDisplayF.textContent = answerF;
    // init call fn
    initColors();
    initQuestion();
    Array.from(cell).forEach(el => {
        // event audio cell mouse hover
        el.addEventListener('mouseenter', () => {
            audio.CellHover.play();
            answerDisplay.textContent = '';
        });
        // get event from cell click    
        el.addEventListener('click', cellClick);
        // callback event fn
        function cellClick() {
            // stop if color match
            if (colorMatch == true) {
                // audio cell error click
                audio.CellError.play();
                return;
            }
            // audio cell click
            audio.Cell.play();
            answer = el.style.backgroundColor;
            // debug console
            console.log(answer, question);
            // check response
            if (answer == question) {
                colorMatch = true;
                startBtn.style.display = 'block';
                answerDisplay.textContent = "Correct!";
                answerDisplayT.textContent = ++answerT;
                // check win
                checkWin();
            } else {
                el.style.visibility = 'hidden';
                answerDisplay.textContent = "Wrong!";
                answerDisplayF.textContent = ++answerF;
            }
        }
    });
}
// call main
init();