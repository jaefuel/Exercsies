//Your job is to figure out the index of which vowel is missing from a given string

function solve(str)
{
    let vowels = ['a','e','i','o','u'];

    return vowels.indexOf(vowels.filter(c => !str.includes(c))[0])

}

console.log(solve("Bb Smith sent us six neatly arranged range bicycles"))