const myFunc = function () {
    const myVar = "value";
    return myVar;
}

// arrow function, syntactic sugar.
const myFun = () => {
    const myVar = "value";
    return myVar;
}

// When there is no function body, and only a return value
const myFu = () => "value";


const magic = () => new Date();