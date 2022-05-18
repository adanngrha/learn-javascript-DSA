let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

// search or extract a pattern more than once, use g flag
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line