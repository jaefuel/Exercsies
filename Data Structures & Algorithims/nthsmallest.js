//Given an array of integers , Find the Nth smallest element in this array of integers.

function nthSmallest(arr,nth)
{
    let arrSorted = arr.sort((a,b) => a-b)
    return arrSorted[nth - 1]
}

console.log(nthSmallest([15,20,7,10,4,3] ,3))