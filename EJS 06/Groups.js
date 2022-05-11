class Group
{
    constructor()
    {
        this.group = [];
    }

    add(arg)
    {
        if (!this.group.includes(arg))
        {
            this.group.push(arg);
        }
    }

    delete(arg)
    {
        if (this.group.includes(arg))
        {
            this.group.splice(this.group.indexOf(arg),1);
        }
        
    }

    has(arg)
    {
        return this.group.includes(arg); 
   
    }

    static from (obj)
    {
        let newGroup = new Group();

        for (let e in obj)
        {
            newGroup.add(e);
        }

        return newGroup;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false