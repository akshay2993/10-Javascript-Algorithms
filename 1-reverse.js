// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189

function reverseInt(num) {
    var reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}
console.log(reverseInt(-15));

// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'

// function reverse(str:string) {
//     const strToArray = str.split('')
//     return strToArray.reverse().join('')
// }
// function reverse(str: string) {
//     let reversed = ''
//     for(let char of str){
//         reversed = char + reversed
//     }
//     return reversed
// }
// console.log(reverse('string'))
