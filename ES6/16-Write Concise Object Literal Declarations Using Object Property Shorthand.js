const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// syntactic sugar
const getMouseePosition = (x, y) => ({ x, y });


const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};


