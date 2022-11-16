//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(arr)
{
    let odds = arr.filter(e => e % 2 != 0).sort((a,b) => a - b)
    return arr.map((e) => e % 2 != 0 ? odds.shift() : e)
    
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))