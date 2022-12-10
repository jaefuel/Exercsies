//Create a unique sorted array using breadcrumbs

function solve(arr)
{
    let uniqueArr = [];
    let breadcrumbs = {};

    arr.forEach(e => 
    {
        if (!breadcrumbs[e])
        {
            uniqueArr.push(e);
            breadcrumbs[e] = true;
        }
    })

    uniqueArr.sort((a,b) => a-b);

    return uniqueArr;

}

console.log(solve([1,2,2,2,2,3,4,5,5,5,6,9,7,8,15,11,13,12,12]))