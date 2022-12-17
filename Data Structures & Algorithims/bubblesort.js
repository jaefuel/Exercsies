//Create a bubblesort algorithim

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

function solve(array)
{
    let countOuter = 0;
    let countInner = 0;
    let countSwap = 0;

    let swapped;

    do 
    {
        countOuter++;
        console.log(countOuter) 
        swapped = false;

        for (let i = 0; i < array.length; i++)
        {
            countInner++;
            console.log(countInner)

            if (array[i] && array[i+1] && array[i] > array[i+1])
            {
                

                countSwap++;
                console.log(array[i] + " - "+ array[i+1]);
                swap(array,i,i+1);
                swapped=true;   
                
                console.log(array)
            }
        }
    }while(swapped)

    return array
}

console.log(solve([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))