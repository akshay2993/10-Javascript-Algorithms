// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]

function chunk(arr, size) {
    let result = []
    let index = 0
    // Step 1: how to create chunks
    // arr.slice(0, size)

    // Step 2: multiple chunks
    for(let i = index; i < arr.length; i+=size){
        result.push(arr.slice(i, i+size))
    }

    return result
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))