//Given a string of characters as input, write a function that returns it with the characters reversed.

function solve1(str)
{
    let arr = str.split("");

    return arr.map((e,i) => arr[arr.length - 1 - i]).join("");


}

function solve2(str)
{
    return str.split("").reverse().join();


}

// function("abcd") => (function("bcd") => (function("cd") => (function("d") => (function("") => "") + "d") + "c") + "b") + "a"
function solve3(str)
{
    if(str === "")
    {
        return ""
    }
    else
    {
        return function3(str.substr(1) + str[0])
    }
}

function solve4(str)
{
    return str.split("").reduce((a,c) => c + a, "")
}


console.log(function1("abcdefghi"))


