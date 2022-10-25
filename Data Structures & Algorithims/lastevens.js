//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
//The original array will be not empty and will contain at least "number" even numbers. For example:

function lastevens(arr,n)
{
    let newArr = arr.filter(e => e % 2 == 0).slice(- n);

    return newArr
}

console.log(lastevens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))