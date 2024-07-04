function isPalindrome(string) {
    let start = 0;
    let end = string.length-1

    while(start < end) {
        if(string[start] !== string[end] ){
            return false
        }else {
            start++
            end--
        }
    }
    return true
}

// function isPalindrome(string) {
//     const reversed = string.split('').reverse().join('')

//     return reversed === string

// }

console.log(isPalindrome('madam'))