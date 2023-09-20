console.log("i am running"); 

let puzzle1 = 
[
    [ 0, 0, 0, 4, 5, 6, 7, 8, 9 ],
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

function populateSudokuGrid(puzzle) {
    const grid = document.querySelector('.sudoku-grid');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 9; col++) {
            const td = document.createElement('td');
            if (puzzle[row][col] >=1 && puzzle[row][col] <= 9) {
                td.textContent = puzzle[row][col];
            }
            else if(puzzle[row][col] == 0)
            {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1; // Limit input to a single character
                input.pattern = '[1-9]'; // Validate input pattern (1-9)
                input.addEventListener('input', function () 
                {
                    // Ensure the input is a single digit between 1 and 9
                    const inputValue = this.value.trim();
                    if (/^[1-9]$/.test(inputValue)) {
                        puzzle[row][col] = parseInt(inputValue, 10); // Update puzzle data
                        td.textContent = inputValue; 
                    } else {
                        this.value = ''; // Clear invalid input
                        puzzle[row][col] = 0; // Reset puzzle data
                    }
                });
            }

            tr.appendChild(td);
        }
        grid.appendChild(tr);
    }
}

// Call the function to populate the Sudoku grid
populateSudokuGrid(puzzle1);

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
});


function validateNumber() 
{
    const numberInput = document.querySelector('.numberInput');
    const resultMessage = document.getElementById('result'); 

    const enteredValue = numberInput.value.trim();
    const number = parseInt(enteredValue, 10);

    if (isNaN(number)) {
        // Not a valid number
        numberInput.value = '';
        resultMessage.textContent = 'Please enter a valid number.';
    } else if (number >= 1 && number <= 9) {
        // Valid number within the range
        resultMessage.textContent = `You entered: ${number}`;
    } else {
        // Number out of range
        squareInput.value = '';
        resultMessage.textContent = 'Number is out of range (1-9).';
    }
}