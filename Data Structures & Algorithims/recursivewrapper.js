//Create a recursive wrapper method

function wrapperLoop(num)
{
    function factorial(i)
    {
        if (i <= 1)
        {
            return 1
        }
        else
        {
           return i * factorial(i - 1)
        }
    }

    return factorial(num)
}


console.log(wrapperLoop(3))