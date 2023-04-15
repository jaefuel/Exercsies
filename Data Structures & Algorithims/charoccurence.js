//Given a string of characters, return the character that appears the most often.

function max(str)
{
    let word = {};
    let charArray = [];
    let valuesArray = [];
    let maxValue = 0;

    for (c of str)
    {
        Object.keys(word).includes(c) ? word[c]++ : word[c] = 1;
    }


    charArray = Object.keys(word);
    valuesArray = Object.values(word);
    maxValue = Math.max(...valuesArray);



    return charArray[valuesArray.indexOf(maxValue)]

}


console.log(max("Hello World!"))