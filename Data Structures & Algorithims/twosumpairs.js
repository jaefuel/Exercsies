//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function solve(arr, sum)
{
    let pairs = [] 

    let obj = {} 

    for (num of arr)
    {
        if(obj[sum-num])
        {
            pairs.push([num,sum-num])
        }
        else
        {
            obj[num] = 1
        }
    }

    return pairs
}

console.log(solve([1, 2, 2, 3, 4], 4))