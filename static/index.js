console.log("i am running")

function populateSudokuGrid(puzzle) {
    const grid = document.getElementById('sudoku-grid');
    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 9; col++) {
            const td = document.createElement('td');
            if (puzzle[row][col] !== 0) {
                td.textContent = puzzle[row][col];
            }
            tr.appendChild(td);
        }
        grid.appendChild(tr);
    }
}

// Call the function to populate the Sudoku grid
populateSudokuGrid(puzzle);
