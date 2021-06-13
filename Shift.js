
// function rotate(array, stepsToShift) {
//     for (var i = 0; i < stepsToShift; i++) {
//         // if (direcTion === ['left']){
//         array.unshift(array.pop());
//         // }
      
//     }
//     return array;
  
// }


// console.log(rotate(['john','jane', 'sarah','alex'], 2));
// console.log(rotate([1, 2, 3, 4, 5], 3));



// function shiftRight(arr, places) {
//     for (var i = 0; i < places; i++) {
//         arr.unshift(arr.pop());
//     }
//     return arr;
// }

// function shiftLeft(arr, places) {
//     for (var i = 0; i < places; i++) {
//         arr.push(arr.shift());
//     }
//     return arr;
// }

function shift(array, direction, n) {
    for (var i = n; i > 0; --i) { 
        (direction > 0 ? array.unshift(array.pop()) : array.push(array.shift())); }
    return array;
 }

 console.log(shift(['john','jane', 'sarah','alex'], 2,2));
 console.log(shift([1, 2, 3, 4, 5], 1, 3));
 