// ES5
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

// ES6
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// not work bcs the spread operator only works in-place, 
// like in an argument to a function or in an array literal.
const spreaded = ...arr;


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);