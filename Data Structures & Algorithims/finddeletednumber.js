//Implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(arr1,arr2)
{
   return arr1.filter(e => !arr2.includes(e))
}

console.log(arrayDiff([1,2], [1]))
console.log(arrayDiff([1,2,2,2,3], [2]))
console.log(arrayDiff([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))