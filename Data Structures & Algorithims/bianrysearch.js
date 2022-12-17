//Create a binary search algorithim

function solve(list,item)
{
    let min = 0;
    let max = list.length - 1;
    let guess;

    while (min <= max)
    {
        guess = Math.floor((min + max) / 2);

        if (list[guess] == item)
        {
            return guess;
        }
        else
        {
            if (list[guess] < item)
            {
                min = guess + 1;
            }
            else
            {
                max = guess - 1;
            }       
        }
    }
 
    return  -1;
}

console.log(solve([2,6,7,90,102], 90))