function shuffle(array)
{
    return array.sort((a,b) => {
        return 1 - Math.ceil(Math.random() * 2)
    })
}

let arr = [1, 2, 3];

console.log(shuffle(arr));

console.log(shuffle(arr));

console.log(shuffle(arr));

console.log(shuffle(arr));
