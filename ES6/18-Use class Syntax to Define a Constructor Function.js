// es5
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');


// es6
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');


class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'