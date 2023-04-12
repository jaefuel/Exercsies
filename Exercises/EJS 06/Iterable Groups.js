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

        for (let e of obj)
        {
            newGroup.add(e);
        }

        return newGroup;
    }
}

class GroupIterator 
{
    constructor(obj) 
    {
        this.index = 0;
        this.group = obj.group;
    }
  
    next() 
    {
        if (this.index == this.group.length)
        {
            return {done: true}
        }

        let value = this.group[this.index];

        this.index++;
    
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function()
{
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c