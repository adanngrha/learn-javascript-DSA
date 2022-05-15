function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();

// this will be an error
console.log(loc);

function myLocalScope() {
    // Only change code below this line
    const myVar = "yes";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);