let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);

// Any other forms of Kevin will not match. For example, 
// the regex /Kevin/ will not match kevin or KEVIN
let wrongRegex = /kevin/;
wrongRegex.test(testStr);


let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);