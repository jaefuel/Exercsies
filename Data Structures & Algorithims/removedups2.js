//You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

function solve(arr)
{
    return arr.map(str => {
        let a = str.split("")
        return a.filter((e,i) => e != a[i + 1]).join("")
    })
    
}

console.log(solve(["abracadabra","allottee","assessee"]))