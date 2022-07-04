let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries)
{
  sum += Number(salaries[key])

  console.log(salaries[key])
}

console.log(sum)