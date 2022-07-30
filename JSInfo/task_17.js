function multiplyNumeric(obj)
{
  for (let key in obj)
  {
    if (obj[key] == Number(obj[key]))
    {
      obj[key] *= 2;
    }
  }
}


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call

console.log(menu)

