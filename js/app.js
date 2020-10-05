import { constD, displayAllCells, initColors, rnd, checkWin, audio, initQuestion } from './lib.js';
// new game event
newGame.addEventListener('click', () => {
    // audio button click
    audio.Button.play();
    // reset var
    constD.gameOver = false;
    constD.answerT = 0;
    constD.answerF = 0;
    constD.rgbCells = [];
    constD.colorMatch = false;
    startBtn.style.display = 'none';
    constD.answerDisplayT.textContent = constD.answerT;
    constD.answerDisplayF.textContent = constD.answerF;
    constD.answerDisplay.textContent = '';
    constD.winMessage.style.display = 'none';
    // init call fn
    displayAllCells();
    initColors();
    initQuestion();
});
// start event new RGB color 
startBtn.addEventListener('click', () => {
    // check win game 
    if (constD.gameOver === true) {
        return;
    }
    // audio button click
    audio.Button.play();
    // reset var
    constD.rgbCells = [];
    constD.colorMatch = false;
    startBtn.style.display = 'none';
    // init call fn
    displayAllCells();
    initColors();
    initQuestion();
});
// main
const init = () => {
    // container count and answer(true/false)  
    constD.answerDisplayT.textContent = constD.answerT;
    constD.answerDisplayF.textContent = constD.answerF;
    // init call fn
    initColors();
    initQuestion();
    Array.from(constD.cell).forEach(el => {
        // event audio cell mouse hover
        el.addEventListener('mouseenter', () => {
            audio.CellHover.play();
            constD.answerDisplay.textContent = '';
        });
        // get event from cell click    
        el.addEventListener('click', cellClick);
        // callback event fn
        function cellClick() {
            // stop if color match
            if (constD.colorMatch == true) {
                // audio cell error click
                audio.CellError.play();
                return;
            }
            // audio cell click
            audio.Cell.play();
            constD.answer = el.style.backgroundColor;
            // debug console
            console.log(constD.answer, constD.question);
            // check response
            if (constD.answer == constD.question) {
                constD.colorMatch = true;
                startBtn.style.display = 'block';
                constD.answerDisplay.textContent = "Correct!";
                constD.answerDisplayT.textContent = ++constD.answerT;
                // check win
                checkWin();
            } else {
                el.style.visibility = 'hidden';
                constD.answerDisplay.textContent = "Wrong!";
                constD.answerDisplayF.textContent = ++constD.answerF;
            }
        }
    });
}

init();