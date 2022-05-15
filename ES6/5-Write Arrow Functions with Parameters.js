const doubler = (item) => item * 2;
doubler(4);

// arrow function
// one parameter
const doublerr = item => item * 2;

// two parameter
const multiplier = (item, multi) => item * multi;

multiplier(4, 2);



const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));