function camelize(str)
{
    let newStr = str.split("");

    for (let i = 0; i < newStr.length; i++)
    {
        if (newStr[i] == "-")
        {
            newStr.splice(i,1);
            newStr[i] = newStr[i].toUpperCase();
            i--;
        }
    }

    newStr = newStr.join("");

    console.log(newStr);


}

camelize("background-color");

camelize("list-style-image")
camelize("-webkit-transition")

