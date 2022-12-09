//Given a string of characters, return the character that appears the most often.

function max(str)
{
    let word = {};

    let char = "";
    let max = 0;

    for (c of str)
    {
        Object.keys(word).includes(c) ? word[c]++ : word[c] = 1;
    }

    

    Object.keys(word).forEach(k =>
    {
        if (word[k]> max)
        {
            max = word[k];
            char = k;
        }
    })

    return char;

}


console.log(max("Hello World!"))