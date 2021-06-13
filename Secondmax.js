

// function secondMax(arr){
//     var max = Math.max.apply(null, arr), // get the max of the array
//     maxi = arr.indexOf(max);
//     arr[maxi] = -Infinity; // replace max in the array with -infinity
//     var secondMax = Math.max.apply(null, arr); // get the new max 
//     arr[maxi] = max;
// return secondMax;
// }
// console.log(secondMax([1,2,3,4,5]));

function nextBiggest(numB) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of numB) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) {
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  
  
  console.log(nextBiggest([1,2,3,4,5]));

  console.log(nextBiggest([4123]));