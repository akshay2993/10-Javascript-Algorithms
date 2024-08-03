// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('why?') --> 0 


function vowels(str){
    const strArr = str.toLowerCase().split('')
    // console.log(strArr)
    let vowelCount = 0
    for(let i=0; i<strArr.length; i++){
        if(strArr[i] === 'a' || strArr[i] === 'e' || strArr[i] === 'i' || strArr[i] === 'o' || strArr[i] === 'u'){
            vowelCount++
        }
    }
    return vowelCount
}

console.log(vowels('How are you?'))