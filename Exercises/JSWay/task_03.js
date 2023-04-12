class BankAccount
{
    constructor(name)
    {
        this.name = name;
        this.balance = 0;
    }

    credit(val)
    {
        this.balance += val;
    }

    describe()
    {
        return `${this.name} bank account has a balance of $${this.balance}`
    }
}

let seansBank = new BankAccount("Sean");
let bradsBank = new BankAccount("Brad");
let georgesBank = new BankAccount("George");

let arr = [seansBank,bradsBank,georgesBank];

arr.forEach(e => {
    e.credit(1000);
    console.log(e.describe());
})