//Perform a search and replace on the sentence using the arguments

function solve1(str,w1,w2)
{
    return str.replace(w1,w2)
}

function solve2(str)
{
    return str.split(" ").reduce((a,c) => c.length > a.length ? c.length : a.length, "")
}

function solve3(str)
{
    let arr = str.split(" ").sort((a,b) => b.length - a.length)

    return arr[0]
}

console.log(solve3(10))