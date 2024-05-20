import { dictionary } from "./globals.js";

const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)], // correct word, random from dictionary
    grid: Array(9) // row arr
        .fill()
        .map(() => Array(5).fill('')), // col arr
    currentRow: 0,
    currentCol: 0, // pos in the grid where next letter can be typed
};

function updateGrid() {
    for(let i = 0; i < state.grid.length; i++) {
        for(let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function drawBox(container, row, col, letter = '') { // creating the box
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for(let i = 0; i < 9; i++) { // rows
        for(let j = 0; j < 5; j++) {   // cols
            drawBox(grid, i, j);
        }
    }

    container.appendChild(grid);
}

function keyboardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key; // e, event object
        if(key === 'Enter') {
            if(state.currentCol === 5) { // check if all cols are filled
                const word = getCurrentWord();
                if(isWordValid(word)) {
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0; // move to the next row, set col 0
                } else {
                    alert('Not a real word!');
                }
            }
        }
        if(key === 'Backspace') {
            removeLetter();
        }
        if(isLetter(key)) {
            addLetter(key);
        }

        updateGrid();
    };
}

function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

function isWordValid(word) {
    return dictionary.includes(word);
}

function revealWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500; // in ms

    for(let i = 0; i < 5; i++) { // loop over the letters
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;

        setTimeout(() => {
            if(letter === state.secret[i]) {
                box.classList.add('right');
            } else if(state.secret.includes(letter)) {
                box.classList.add('wrong');
            } else {
                box.classList.add('empty');
            }
        }, ((i + 1) * animation_duration) / 2);

        box.classList.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    const isWinner = state.secret === guess; // check if the user guesses the word
    const isGameOver = state.currentRow === 8; // game over when the row reaches 9

    setTimeout(() => {
        if(isWinner) {
            alert('Congrats!');
        } else if(isGameOver) {
            alert(`The correct word was ${state.secret}.`);
        }
    }, 3 * animation_duration);
}

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
    if(state.currentCol === 5) return; // space check
    state.grid[state.currentRow][state.currentCol] = letter; // otherwise, set the letter on the current pos
    state.currentCol++;
}

function removeLetter() {
    if(state.currentCol === 0) return; // check if anything to remove
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}

function start() {
    const game = document.getElementById('game');
    drawGrid(game);

    keyboardEvents();
}

start();