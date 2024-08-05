// --- Directions
// Write a function that accepts a positive number N.
// The function should console log an inverted half-pyramid shape
// with N levels using the # character. 

// --- Examples
//   invertedHalfPyramid(4) -->
//       '####'
//       '### '
//       '##  '
//       '#   '

function invertedHalfPyramid(n){
    for (let i = n; i >= 1; i--) {
        let rowPattern = ''
        for (let j = 1; j <= i; j++) {
                rowPattern += '#'            
        }
        console.log(rowPattern)
    }
}

invertedHalfPyramid(6)