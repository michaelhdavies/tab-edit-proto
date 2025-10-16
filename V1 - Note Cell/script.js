const b = document.body;
const n = document.getElementById('note');
const c = document.getElementById('cell');

let noteBool = false;

init();

function init() {
    updateNote();
};

function reverseNote() {
    noteBool = !noteBool;
};

function updateNote() {
    if (noteBool === false) {
        n.style.visibility = 'hidden';
    } else {
        n.style.visibility = 'visible';
    };
};

function changeNote() {
    reverseNote();
    updateNote();
};

c.addEventListener('click', noteClick)

function noteClick() {
    changeNote();
    console.log(`Click Logged`)
};