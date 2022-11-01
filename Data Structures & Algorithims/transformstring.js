//Change case of every character, ie. lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.

function transform(str)
{
    let arr = str.split(" ")

    let newArr = arr.map(w => {
        let wordArr = w.split("")
        let newWordArr = []

        wordArr.forEach(e => e == e.toUpperCase() ? newWordArr.push(e.toLowerCase()) : newWordArr.push(e.toUpperCase()))

        return newWordArr.join("")
    })

    return newArr.reverse().join(" ")
}

console.log(transform("Example Input"))