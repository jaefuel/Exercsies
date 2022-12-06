//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
//Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

function solve(jewels,stones)
{
    let count = 0;

    for (c of stones)
    {
        if (jewels.includes(c))
        {
            count++;
        }
    }

    return count;

}

console.log(solve("aA","aAAbbbb"))