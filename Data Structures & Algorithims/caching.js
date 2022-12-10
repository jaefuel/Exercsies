//Create a cache to save results of factorial method

function retrieveCache(method)
{
    const cache = {};

    return (num) =>
    {
        if (num in cache)
        {
            return cache[num];
        }
        else
        {
            let result = method(num);
            cache[num] = result;
            return result;
        }
    }

}

function factorial(num)
{
    if (num <= 1)
    {
        return 1
    }
    else
    {
        return num * factorial(num - 1)
    }
}

const factorialCache = retrieveCache(factorial)

console.log(factorialCache(4))