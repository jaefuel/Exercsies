//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function solve(arr, sum)
{
    let pairs = []

    let obj = {}

    for (num of arr)
    {
        if(!obj[num] && !obj[sum-num])
        {
            obj[num] = sum - num;
        }
    }

    for (num in obj)
    {
        if (arr.includes(obj[num]))
        {
            
            pairs.push([Number(num),obj[num]])
            
            
        }
    }

    return pairs
}

console.log(solve([1, 2, 2, 3, 4], 4))