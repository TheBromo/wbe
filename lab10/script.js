let state = {
    board: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
    ],
    currentPlayer: 'b'
    //add state who is the current player
    // display this
}


function showBoard() {

    let fields = []

    for (const row of state.board) {
        for (const [column, field] of row.entries()) {
            let type = undefined
            //TODO: add handler for click that checks column is full and then places field at the bottom    

            switch (field) {
                case 'b':
                    type = elt("div", { class: "blue piece", })
                    break;
                case 'r':
                    type = elt("div", { class: "red piece", })
                default:
                    break;
            }
            let f = undefined

            if (type) {
                f = elt("div", { class: "field", }, ...[type])
            } else {
                f = elt("div", { class: "field", })
            }

            f.addEventListener("mousedown", () => {
                placeInColumn(column, state.currentPlayer)
            })

            fields.push(f)
        }
    }

    const display = elt("div", { class: "board", }, ...fields)
    const html = document.getElementById("board")
    html.innerHTML = ''
    html.appendChild(display)

    const player = document.getElementById("player")
    const string = state.currentPlayer === 'b' ? "blue" : "red"
    const playerLabel = elt("p", { style: `background: ${string};color: white; font-size: x-large;` }, `Current Player: ${string}`)
    player.innerHTML = ''
    player.appendChild(playerLabel)


}

function placeInColumn(columnIndex, symbol) {

    if (columnIndex < 0 || columnIndex >= state.board[0].length) {
        console.error("column index out of range")
        return
    }

    let heigth = state.board.length - 1
    while (heigth >= 0 && state.board[heigth][columnIndex] !== '') {
        heigth--
    }

    if (heigth < 0) {
        console.error("no free field found in column")
        return
    }


    state.board[heigth][columnIndex] = symbol

    if (state.currentPlayer === 'b') {
        state.currentPlayer = 'r'
    } else {
        state.currentPlayer = 'b'
    }

    showBoard()
}



function restartGame() {
    state = {
        board: [
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '']
        ],
        currentPlayer: 'b'
    }
    showBoard()
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
