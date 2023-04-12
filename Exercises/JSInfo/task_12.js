function unique(arr)
{

}

function unique(arr) {
    for (let i = 0; i < arr.length; i++)
    {
        let temp = arr[i];

        let tempArr = [...arr];

        tempArr.splice(i,1);

        if (tempArr.indexOf(temp) >= 0)
        {
            arr.splice(i,1)
            i--
        }
    }

    return arr
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O", "ki", "ki"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O