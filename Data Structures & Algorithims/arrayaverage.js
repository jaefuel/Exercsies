//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.

function getAverage(arr)
{
    let sum = arr.reduce((a,c) => a+c, 0)
    let average = Math.floor(sum / arr.length)

    return average

}

getAverage([2,2,2,2])
getAverage([1,2,3,4,5])
getAverage([1,1,1,1,1,1,1,2])