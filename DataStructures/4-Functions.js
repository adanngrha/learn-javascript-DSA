function minimal (a, b) {
    if (a == b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return a;
    }
}

function power (a, b) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
}

console.log(minimal(3, 6));
console.log(power(7, 2));