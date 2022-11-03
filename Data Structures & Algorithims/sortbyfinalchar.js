//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
//If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

function last(str)
{
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let arr = str.split(" ")
    arr.sort((a,b) => {
        let word1 = a.split("")
        let word2 = b.split("")      

        if (alphabets.indexOf(word1[word1.length-1]) > alphabets.indexOf(word2[word2.length-1]))
        {
            return 1
        }
        else if (alphabets.indexOf(word1[word1.length-1]) == alphabets.indexOf(word2[word2.length-1]))
        {
            return 0
        }
        else
        {
            return -1
        }

    })
    return arr
}

console.log(last('man i need a taxi up to ubud'))
console.log(last('what time are we climbing up the volcano'))