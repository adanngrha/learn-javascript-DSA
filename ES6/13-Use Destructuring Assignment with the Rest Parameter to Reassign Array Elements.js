const [a, b, ...arr1] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);


const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [,, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);