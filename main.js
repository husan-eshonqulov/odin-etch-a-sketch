let mode = 'draw';
const cells = document.querySelector('.cells');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('rowDiv');
    for (let j = 0; j < 16; j++) {
        const col = document.createElement('div');
        col.classList.add('colDiv');
        row.append(col);
    }
    cells.append(row);
}

const cols = document.querySelectorAll('.colDiv');
const len = cols.length;

for (let i = 0; i < len; i++) {
    cols[i].addEventListener('mouseover', () => paint(cols[i], mode));
}

function paint(el) {
    if (mode === 'draw') el.classList.add('paint');
    else el.classList.remove('paint');
}

const erease = document.querySelector('.erease');
erease.addEventListener('click', () => ereaseCell());

function ereaseCell() {
    if (mode === 'draw') {
        erease.classList.add('ereaseCell');
        mode = 'erease';
    }
    else {
        erease.classList.remove('ereaseCell');
        mode = 'draw';
    }
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => clearCells());

function clearCells() {
    for (let i = 0; i < len; i++) {
        cols[i].classList.remove('paint')
    }
    erease.classList.remove('ereaseCell');
}