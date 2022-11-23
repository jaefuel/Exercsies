function solve(bin)
{   
    let b = bin
    let steps = 0

    while (steps < 100)
    {
        for(let i = 0; i < b.length; i++)
        {
            if (b[i + 1] == 1 && !b.slice(i + 2).includes(1))
            {
                if (b[i] == 1)
                {
                    b[i] = 0
                }
                else
                {
                    b[i] = 1
                }

                console.log(b + " " + i + " rule 1")
            }
            else
            {                       
                if (b[b.length - 1] == 1)
                {
                    b[b.length - 1] = 0
                }
                else
                {
                    b[b.length - 1] = 1
                }
                
                console.log(b + " " + i + " rule 2")
            }         
            steps++
        }           
    }
    return steps
}
console.log(solve([1,0,0]))
