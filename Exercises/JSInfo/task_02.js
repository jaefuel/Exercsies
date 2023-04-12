function filterRange(arr,a,b)
{
    let newArr = arr.filter(e => e >= a && e <= b)

    console.log(newArr)

    return newArr
}

filterRange([5, 3, 8, 1], 1, 4)

