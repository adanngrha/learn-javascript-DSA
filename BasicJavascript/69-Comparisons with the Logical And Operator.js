// this code 
if (num > 5) {
    if (num < 10) {
        return "Yes";
    }
}
return "No";

// is the same as this code
if (num > 5 && num < 10) {
    return "Yes";
}
return "No";

// e.g.
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);