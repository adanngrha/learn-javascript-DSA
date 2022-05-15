function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

test(true);
test(false);

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}