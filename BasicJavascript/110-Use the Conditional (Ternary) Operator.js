// this function
function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater or equal";
    }
}

// can be simply
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);