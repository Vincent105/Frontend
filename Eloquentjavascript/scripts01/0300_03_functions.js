/*
Bindings and scopes
*/
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // → 60
}
// y is not visible here
console.log(x + z);
// → 40

const halve = function (n) {
    return n / 2;
};
let n = 10;

console.log(halve(100));
// → 50
console.log(n);
// → 10

/*
Nested scope
*/
const humans = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount}:${unit}${name}`);
    }
    ingredient(1, "can", "chickpeas");
    ingredient(3, "cup", "tahini");
};

humans(30);

//Declaration notation
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

//Arrow functions
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(2));
console.log(square2(3));
