// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. 

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true

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


// OR


// function isPalindrome(string) {
//     const reversed = string.split('').reverse().join('')

//     return reversed === string

// }

console.log(isPalindrome('madam'))