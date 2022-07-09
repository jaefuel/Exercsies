function getAverageAge(users)
{
    let sum = users.reduce((a,c) => a + c.age, 0)

    return sum / users.length;
}

let john = { name: "John", age: 20 };
let pete = { name: "Pete", age: 40 };
let mary = { name: "Mary", age: 60 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28