let log = a => (b => (c => a+b+c))

let log2 = log(1) // 1 => (b => (c => 1 + b + c))

let log3 = log2(2) // 1 => (2 => 1 + (c => 2 + c)

console.log(log3(3)) //



