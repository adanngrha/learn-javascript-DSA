const alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    24: "C",
    25: "B",
    26: "A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];

// switch case 
function phoneticLookup1(val) {
    let result = "";
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }
    return result;
}
phoneticLookup1("charlie");

// objects lookups
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        alpha : "Adams",
        bravo : "Boston",
        charlie : "Chicago",
        delta : "Denver",
        echo : "Easy",
        foxtrot : "Frank"
    }
    result = lookup[val];
    return result;
}
phoneticLookup("charlie");