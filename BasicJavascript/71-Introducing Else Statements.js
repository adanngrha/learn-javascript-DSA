if (num > 10) {
    return "Bigger than 10";
} else {
    return "10 or Less";
}

function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}

testElse(4);