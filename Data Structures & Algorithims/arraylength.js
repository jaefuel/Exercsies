//Given an array of strings of the same letter type. Return a new array, 
//which will differ in that the length of each element is equal to the average length of the elements of the previous array.

function solve(arrays)
{
    let length = Math.round(arrays.reduce((a,c) => a + c.length, 0) / arrays.length)
    return arrays.map(e => {
        let temp = [...e]
        while (temp.length != length)
        {
            if (temp.length > length)
            {
                temp.pop()
            }
            else
            {
                temp.push(e[0])
            }
        }

        return temp.join("")
    })
}

console.log(solve(['aa', 'bb', 'ddd', 'eee']))