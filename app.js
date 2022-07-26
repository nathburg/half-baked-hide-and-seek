// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const resetButton = document.getElementById('reset-button');
const tryAgainButton = document.getElementById('try-again');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];
const hidingEls = {'tree' : treeContainer, 'shed' : shedContainer, 'boulder' : boulderContainer}

let correctGuesses = 0;
let totalGuesses = 0;

// tryAgainButton.style.display = 'block';
// console.log(tryAgainButton.style.display)


shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
    if (answer === 'shed') {
        correctGuesses++;
    }
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function clearStyle() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

function updateDom() {
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}


resetButton.addEventListener('click', () => {
    clearStyle();
    correctGuesses = 0;
    totalGuesses = 0;
    updateDom();
    tryAgainButton.style.display = 'none';
    shedButton.disabled = false;
    treeButton.disabled = false;
    boulderButton.disabled = false;
})

tryAgainButton.addEventListener('click', () => {
    clearStyle();
    tryAgainButton.style.display = 'none';
    shedButton.disabled = false;
    treeButton.disabled = false;
    boulderButton.disabled = false;
})


function handleGuess(correctSpot, userGuess) {
    // then increment the guesses
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    const correctEl = hidingEls[correctSpot];
    // then add the face class to that element so that the face shows up
    correctEl.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (correctSpot === userGuess) {
        correctGuesses++;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    updateDom();
    // deactive buttons
    shedButton.disabled = true;
    treeButton.disabled = true;
    boulderButton.disabled = true;

    tryAgainButton.style.display = 'block';
}
