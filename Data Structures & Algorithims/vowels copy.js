//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 

function solve(n)
{
    let fibonacci = 
    {
        0: 0,
        1: 1,
    }

    for (let i = 2; i < n ; i++)
    {
        if (!fibonacci[i])
        {
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
        }
    }

    return fibonacci[n-1] + fibonacci[n-2]
}

console.log(solve(10))