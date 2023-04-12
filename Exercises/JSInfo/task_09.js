function sortByAge(users)
{
    users.sort((a,b) => {
        if (a.age > b.age)
        {
            return 1;
        }
        else if (a.age < b.age)
        {
            return -1;
        }
        else 
        {
            return 0;
        }
    })
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete