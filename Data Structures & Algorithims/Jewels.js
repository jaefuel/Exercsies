//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
//Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

function solve(jewels,stones)
{

    let solution = {};
    let count = 0;

    for (j of jewels)
    {
        solution[j] = true;
    }

    for (s of stones)
    {
        if (solution[s])
        {
            count++;
        }
    }

    return count;

}

console.log(solve("aA","aAAbbbb"))