const CODES = {
    a: 65,
    z: 90,
};

function createCell(row, col) {
    return `
        <div 
            class="cell"
            contenteditable
            data-type="cell"
            data-cel-col="${col}"
            data-id="${row}:${col}"
        ></div>
    `;
}

function toColumn(col, index) {
    return `
    <div class="column" data-type="resizeble" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col" ></div>
    </div>
  `;
}

function createRow(index, content) {
    const resize = index
        ? '<div class="row-resize" data-resize="row"></div>'
        : '';
    return `
    <div class="row" data-type="resizeble">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
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

    rows.push(createRow(null, cols));

    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            .map((_, col) => createCell(row, col))
            .join('');

        rows.push(createRow(row + 1, cells));
    }
    return rows.join('');
}