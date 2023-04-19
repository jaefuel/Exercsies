//Given a sentence, return the longest word in the string

function solve1(str)
{
    let longestWord = 
    {
        word:"",
        length: 0
    }

    str.split(" ").forEach(word => 
    {
        if (word.length > longestWord.length)
        {
            longestWord.characters = word.length
            longestWord.word = word
        }
    })

    return longestWord.word
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