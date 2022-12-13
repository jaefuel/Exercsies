//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

function solve(arr)
{
    let hashmap = {}

    let dup = false

    arr.forEach(e => {

        
        

        if (!hashmap[e])
        {
            hashmap[e] = 1
        }
        else
        {
            hashmap[e]++
        }     
    })

    console.log(hashmap)


    Object.keys(hashmap).forEach(k =>
    {
        
        if (hashmap[k] >= 2)
        {
            console.log(hashmap[k])
            dup = true
        }
    })

    return dup
}

console.log(solve([1,2,3,1]))