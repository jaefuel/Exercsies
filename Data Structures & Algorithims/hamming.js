//Given two strings of equal length, calculate and return the the hamming distance.

function solve(str1,str2)
{
    let val = 0;

    if (str1.length == str2.length)
    {
        for (let i = 0; i < str1.length ; i++)
        {
            if (str1.charAt(i) != str2.charAt(i))
            {
                val++;
            }
        }
    }

    return val;
}


console.log(solve("racecar"))