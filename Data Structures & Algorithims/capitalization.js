//Given a sentence containing two or more words, return the equivalent of the sentence when capitalized

function solve(str)
{
    let arr = str.split(" ");

    return arr.map(word => {
        return word[0].toUpperCase() + word.slice(1)
    }).join(" ")

}

console.log(solve("Bb Smith sent us six neatly arranged range bicycles"))