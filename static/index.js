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
                console.log(`At ${row}, ${col} input created`);
                input.className = "sudoku-input"; 
                input.type = 'text'; 
                input.maxLength = 2; 
                //input.oninput = "validateNumber()";
                td.appendChild(input);  
                input.addEventListener('input', function() { validateNumber(this) }); 
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
});input.addEventListener('input', validateNumber(this)); 