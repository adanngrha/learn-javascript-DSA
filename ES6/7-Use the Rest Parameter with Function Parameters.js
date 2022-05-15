function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));


const sum = (...args) => {
    let sum = 0;
    let len = args.length;
    for (let i = 0; i < len; i++) {
        sum += args[i];
    }
    return sum;
}