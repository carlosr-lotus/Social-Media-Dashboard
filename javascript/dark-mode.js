// Get website toggle dark mode button
const toggleBtn = document.querySelector('[data-js="toggle-btn"]');

// GET ALL TAGS TO CHANGE IT TO DARK MODE
// *** get all headers tag (h1, h2, h3) ***
let darkModeTxt = document.querySelectorAll('[data-js="dark-mode-text"]');
// *** get all boxes (card-info/overview-box) ***
let cardBoxes = document.querySelectorAll('[data-js="card-info-box"]');
// *** get all texts ***
let allTexts = document.querySelectorAll('[data-js="page-text"]');

toggleBtn.addEventListener('click', () => {
    // Change website BODY tag background
    document.body.classList.toggle("dark-background");

    // Loop through nodeList to add class/color to HEADERS/TEXT
    darkModeTxt.forEach(function(header) {
        header.classList.toggle("white-text");
    });

    // Loop through nodeList to add class/background color to BOXES
    cardBoxes.forEach(function(box) {
        box.classList.toggle("dark-mode-bg");
        console.log(cardBoxes);
    });

    // Loop through nodeList to add class/color to page texts when in Dark Mode
    allTexts.forEach(function(text) {
        text.classList.toggle("dark-mode-text");
    });
})