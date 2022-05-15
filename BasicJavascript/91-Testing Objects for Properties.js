const myObj = {
    top: "hat",
    bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return "Not Found";
}