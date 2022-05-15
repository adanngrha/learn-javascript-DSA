1 != 2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);