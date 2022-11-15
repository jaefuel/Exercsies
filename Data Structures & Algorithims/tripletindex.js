//You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//The input to the function will be an array of three distinct numbers.

function gimme(array)
{
    let arr = array.map((e,i) => [e,i]).sort((a,b) => a[0] - b[0])

    console.log(arr)

    return arr[1][1]
}

console.log(gimme([5, 10, 14]))