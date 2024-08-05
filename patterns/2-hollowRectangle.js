// Print a hollow rectangle pattern where rows and columns are given
// Examples
//   printHollowRectangle(4, 4) -->
//   ####
//   #  #
//   #  #
//   ####


function printHollowRectangle(n, m){
    for (let i = 1; i <= n; i++) {
        let rowPattern = ''
        for(let j = 1; j <= m; j++){
            // console.log(`(${i}, ${j})`)
            if(i === 1 || j === 1 || i === n || j === m){
                rowPattern += '#'
            }else {
                rowPattern += ' '
            }
        }
        console.log(rowPattern)        
    }
}

printHollowRectangle(4, 8)