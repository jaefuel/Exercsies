function solve(arr)
{
    let solution = [];

    for (let j = 0; j < arr.length; j++)
    {
        let num = 0;

        for (let i = 0; i < arr.length; i++)
        {
            if (i != j && (arr[j] % arr[i] == 0 || arr[i] % arr[j] == 0))
            {
                num++;
            }
        }

        solution.push(num)

    }

    return solution
}

console.log(solve([1,3,4,2,6]))