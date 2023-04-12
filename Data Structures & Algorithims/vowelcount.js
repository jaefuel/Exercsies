//Count all the occurring characters in a string.

function solve1(str)
{
    vowels = 0;

    for (let char of str)
    {
        if (["a","e","i","o","u"].includes(char))
        {
            vowels++;
        }
    }

    return vowels;
}

function solve2(str)
{
    let vowels = str.match(/[aeiou]/gi)

    return vowels ? vowels : 0
}

console.log(solve("Bb Smith sent us six neatly arranged range bicycles"))