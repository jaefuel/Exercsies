function Calculator() 
{
    this.op = 
    {
        "+" : (a,b) => a + b,
        "-" : (a,b) => a - b
    }

    this.calculate = function(str)
    {
        let arr = str.split(" ");

        return this.op[arr[1]](Number(arr[0]),Number(arr[2]))

    }

    this.addMethod = function(n, f)
    {
        this.op[n] = f
        console.log(this.op)
    }

    
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 + 9");
console.log( result ); // 8