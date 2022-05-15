const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [e, d,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);


let x = 8, z = 6;
// Only change code below this line
[z, x] = [x, z]