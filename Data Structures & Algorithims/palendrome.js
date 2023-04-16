//Given a string check whether or not it is a palendrome.

function solve(str)
{
    return str == str.split("").reverse().join() ? true : false

}

function solve2(str)
{
    let arr = str.split("")

    for (let i = 0; i < arr.length ; i++)
    {
        if (!(arr[i] == arr[arr.length - 1 - i]))
        {
            return false
        }
    }

    return true
}

console.log(solve2("racecar"))