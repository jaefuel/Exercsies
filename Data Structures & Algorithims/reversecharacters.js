//Given a string of characters as input, write a function that returns it with the characters reversed.

function solve(str)
{
    let arr = str.split("");

    return arr.map((e,i) => arr[arr.length - 1 - i]).join("");


}

console.log(solve("abcdefghi"))