console.log("i am running"); 

let puzzle1 = 
[
    [ 1, 0, 0, 4, 5, 6, 7, 8, 9 ],
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 
    [ 1, 2, 3, 4, 0, 6, 7, 8, 9 ], 
    [ 1, 2, 3, 4, 0, 6, 0, 8, 9 ], 
    [ 1, 2, 3, 4, 5, 6, 7, 0, 9 ], 
    [ 1, 2, 3, 4, 5, 6, 7, 0, 9 ], 
    [ 1, 2, 3, 4, 5, 6, 7, 0, 9 ], 
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]  
]

let puzzle2 = 
[
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ], 
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
]

let puzzle3 = 
[
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ], 
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
    [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
]


function validateNumber(numberInput) 
{
    const resultMessage = document.getElementById('result'); 

    let enteredValue = numberInput.value.trim();

    resultMessage.style.backgroundColor = 'blue';
    
    if (enteredValue.length > 1) {
        resultMessage.style.backgroundColor = 'red'; 
        // If input length is greater than 1, take the last character
        enteredValue = enteredValue.charAt(enteredValue.length - 1 );
        numberInput.value = enteredValue;
    }

    let number = parseInt(enteredValue, 10);

    if (isNaN(number)) {
        // Not a valid number
        numberInput.value = '';
        resultMessage.textContent = `Please enter a valid number. Not: ${number}`;
    } else if (number < 1 || enteredValue > 9) {
        numberInput.value = ''; 
        resultMessage.textContent = `You entered a number out of range: ${number}`; 
    } else {
        // Valid number within the range
        resultMessage.textContent = `You entered: ${number}`;
    } 
}

function createGrid(grid)
{
    const gridContainer = document.getElementById('grid');

    // Loop through the data and populate the grid
    for (let i = 0; i < grid.length; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < grid[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            if(grid[i][j] === 0) {
                const input = document.createElement('input');
                // console.log(`At ${row}, ${col} input created`);
                input.className = "sudoku-input"; 
                input.type = 'text'; 
                input.maxLength = 2; 
                cell.appendChild(input); 
                input.addEventListener('input', function() { validateNumber(this) }); 
                // cell.textContent = grid[i][j];
            }
            else if (grid[i][j] <=9 && grid[i][j]) {
                cell.textContent = grid[i][j];
            }
            // cell.textContent = grid[i][j];
            row.appendChild(cell);
        }

        gridContainer.appendChild(row);
    }

    //gridContainer.style.gridTemplateColumns = `repeat(${grid[0].length}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${grid.length}, 1fr)`;

    
}; 

function populateSudokuGrid(data) { 
    // Get a reference to the grid container
    const gridContainer = document.getElementById('grid');

    // Loop through the data and populate the grid
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < data[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            if( cell[i][j] <= 9 && cell[i][j] >= 1 ) {
                cell.textContent = data[i][j];
            }
            else if (cell[i][j] == 0) { 
                
            }  
            row.appendChild(cell);
        }

        gridContainer.appendChild(row);
    }
}

// Call the function to populate the Sudoku grid
// populateSudokuGrid(puzzle1);
createGrid(puzzle1);

document.addEventListener('DOMContentLoaded', function() {
    // Get references to your buttons and game container
    const generateSudoku = document.querySelector('.generate-sudoku');
    const resetButton = document.querySelector('.solve-sudoku');

    // Add click event listeners to your buttons
    generateSudoku.addEventListener('click', function() {
        // Implement game start logic here
        populateSudokuGrid(puzzle1);
    });

    resetButton.addEventListener('click', function() {
        // Implement game reset logic here
        populateSudokuGrid(puzzle2);
    });
});input.addEventListener('input', validateNumber(this)); 