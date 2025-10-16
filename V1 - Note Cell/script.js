const b = document.body;
const n = document.getElementById('note');
const c = document.getElementById('cell');

let noteBool = false;

init();

function init() {
    updateNote();
}

function updateNote() {
    if (noteBool === false) {
        n.style.visibility = 'hidden';
    } else {
        n.style.visibility = 'visible'
    }
}

c.addEventListener('click', noteClick)

function noteClick() {
    noteBool = !noteBool;
    updateNote();
    console.log(`Click Logged`)
}