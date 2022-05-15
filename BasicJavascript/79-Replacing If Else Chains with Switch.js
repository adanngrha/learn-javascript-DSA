// if else statements
if (val === 1) {
    answer = "a";
} else if (val === 2) {
    answer = "b";
} else {
    answer = "c";
}

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);

// switchcase
switch (val) {
    case 1:
        answer = "a";
        break;
    case 2:
        answer = "b";
        break;
    default:
        answer = "c";
}

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);