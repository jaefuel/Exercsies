let arr = [5, 2, 1, -10, 8];

arr.sort(function (a, b) { 
    if (a > b) return -1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return 1; // if the first value is less than the second
  })

console.log( arr ); // 8, 5, 2, 1, -10