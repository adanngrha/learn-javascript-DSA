const s = [5, 6, 7];
s = [1, 2, 3];  // will be an error
s[2] = 45;
console.log(s);

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    // Only change code above this line
}
editInPlace();