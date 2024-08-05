// Print a solid rectangle pattern where rows and columns are given
// Examples
//   printRectangle(3, 4) -->
//   ####
//   ####
//   ####

function printRectangle(row, col){
    for (let i = 0; i < row; i++) {
        let rowPattern = ''
        for (let i = 0; i < col; i++) {
            rowPattern += '# '           
        }
        console.log(rowPattern)
    }
}


printRectangle(5, 8)
