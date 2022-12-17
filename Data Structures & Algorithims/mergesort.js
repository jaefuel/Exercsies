//Create a mergesort algorithim

function solve(arr)
{
    if (arr.length == 1)
    {
        return arr
    }

    const middle = Math.floor(arr.length / 2);

    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return mergeSort(solve(left),solve(right))
}

function mergeSort(left,right)
{
    let arr = []
    
    while (left.length > 0 || right.length > 0)
    {
        if (right.length == 0)
        {
            arr.push(left[0])
            left.shift()
        }
        else if (left.length == 0)
        {
            arr.push(right[0])
            right.shift()
        }
        else if (left[0] > right[0])
        {
            arr.push(right[0])
            right.shift()
        }
        else
        {
            arr.push(left[0])
            left.shift()
        }
    }

    return arr
}

console.log(solve([2,7,20,14,5,9,1,3,24]))