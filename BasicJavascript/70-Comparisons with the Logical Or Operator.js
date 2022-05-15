// this code
if (num > 10) {
    return "No";
}
if (num < 5) {
    return "No";
}
return "Yes";

// is the same as this code
if (num > 10 || num < 5) {
    return "No";
}
return "Yes";

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);