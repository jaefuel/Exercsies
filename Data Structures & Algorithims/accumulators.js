//Create an accumulator method

function joinElements(array, joinString)
{
    function recursive(index, resultSoFar)
    {
        resultSoFar += array[index];

        if (index === array.length - 1)
        {
            return resultSoFar;
        }
        else
        {
            return recursive(index + 1, resultSoFar + joinString)
        }
    }

    return recursive(0,"")
}

//Iterative solution

function joinElements2(array, joinString)
{
    let resultSoFar = ""

    for (let i = 0; i < array.length-1; i++)
    {
        resultSoFar += array[i] + joinString
    }

    return resultSoFar + array[array.length-1]
}

console.log(joinElements(["s","cr","t"],"e"))

console.log(joinElements2(["s","cr","t"],"e"))