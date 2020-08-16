const CODES = {
    a: 65,
    z: 90,
};

function createCell() {
    return `
        <div class="cell" contenteditable></div>
    `;
}

function toColumn(col) {
    return `<div class="column">${col}</div>`;
}

function createRow(content, info) {
    return `
    <div class="row">
        <div class="row-info">${info || ''}</div>
        <div class="row-data">${content}</div>
    </div>
    `;
}

function toChar(_, index) {
    return String.fromCharCode(CODES.a + index);
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.z - CODES.a + 1;
    const rows = [];

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    rows.push(createRow(cols));

    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('');

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cells, i+1));
    }
    return rows.join('');
}