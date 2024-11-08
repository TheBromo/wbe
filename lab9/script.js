let state = {
    board: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', 'b', '', '', '', '', ''],
        ['', 'r', '', 'b', '', '', '']
    ],
    intervalId: undefined
}


function showBoard() {

    let fields = []

    for (const row of state.board) {
        for (const field of row) {
            let type = undefined
            switch (field) {
                case 'b':
                    type = elt("div", { class: "blue piece", })
                    break;
                case 'r':
                    type = elt("div", { class: "red piece", })
                default:
                    break;
            }
            if (type) {
                fields.push(elt("div", { class: "field", }, ...[type]))
            } else {
                fields.push(elt("div", { class: "field", }))
            }


        }
    }

    const display = elt("div", { class: "board", }, ...fields)
    const html = document.getElementById("board");
    html.innerHTML = ''
    html.appendChild(display)


    if (state.intervalId == undefined) state.intervalId = setInterval(updateBoard, 1000)
}



function updateBoard() {
    console.log("update..")
    const shouldAdd = Math.random();

    if (shouldAdd > 0.5) {
        const emptyCells = [];
        state.board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell === '') emptyCells.push([rowIndex, colIndex]);
            });
        });

        if (emptyCells.length > 0) {
            const [rowIndex, colIndex] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            state.board[rowIndex][colIndex] = Math.random() < 0.5 ? 'b' : 'r';
        }
    } else {
        const occupiedCells = [];
        state.board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell === 'b' || cell === 'r') occupiedCells.push([rowIndex, colIndex]);
            });
        });

        if (occupiedCells.length > 0) {
            const [rowIndex, colIndex] = occupiedCells[Math.floor(Math.random() * occupiedCells.length)];
            state.board[rowIndex][colIndex] = '';
        }
    }
    showBoard()
}
