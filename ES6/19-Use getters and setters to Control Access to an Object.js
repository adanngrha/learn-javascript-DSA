class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


class Thermostat {
    constructor(temperature) {
        this._temperature = temperature;
    }
    get temperature() {
        return 5 / 9 * (this._temperature - 32);
    }
    set temperature(celcius) {
        this._temperature = celcius * 9.0 / 5 + 32
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius