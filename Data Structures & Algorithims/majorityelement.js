//Given an array nums of size n, return the majority element.

function solve(arr)
{
    let elements = {}
    let max = 0;
    let num;

    arr.forEach(e => elements[e] ? elements[e]++ : elements[e] = 1)

    Object.keys(elements).forEach(e => 
    {
        if (elements[e] > max)
        {
            max = elements[e]
            num = e
        }
    })

    return num


}


console.log(solve([2,2,1,1,1,2,2,1,1,1]))