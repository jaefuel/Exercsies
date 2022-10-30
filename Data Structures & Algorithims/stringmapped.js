//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.

function convertStr(str)
{
    let arr = str.toLowerCase().split("");
    let strMapped = arr.map(c=> arr.indexOf(c) == arr.lastIndexOf(c)  ?  "(" : ")").join("")
    return strMapped
}

console.log(convertStr("(( @"))