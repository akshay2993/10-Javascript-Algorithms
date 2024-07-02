function reverseInt(num) {
    var reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}
console.log(reverseInt(-15));
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
