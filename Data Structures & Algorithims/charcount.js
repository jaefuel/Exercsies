//Count all the occurring characters in a string.

function solve(str)
{
    let obj = {}

    str.split("").forEach(c => Object.keys(obj).includes(c) ? obj[c]++ : obj[c] = 1)

    return obj

}

console.log(solve("Bb Smith sent us six neatly arranged range bicycles"))