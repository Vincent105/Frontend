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

//The call stack
function a() {
    function b() {
        function c() {
            console.log('This is c()');
        }
        c();
        console.log('This is b()');
    }
    b();
    console.log('This is a()');
}
a();

//Optional Arguments
function square(x) {
    return x * x;
};

console.log(square(x, true, "test"));    //ignored

function power1(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power1(4));
// → 16
console.log(power1(2, 6));
// → 64

//Closure
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

/*
Recursion
--pass
*/


/*
Growing functions
*/
//Ver.1
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString}:cows`);
    let chickensString = String(chickens);
    while (chickensString.length < 3) {
        chickensString = "0" + chickensString;
    }
    console.log(`${chickensString}:chickens`);
}
printFarmInventory(7, 11);

//Ver.2
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory2(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)}:Cows`);
    console.log(`${zeroPad(chickens, 4)}:chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(7, 11, 9);
/*A pure function is a specific kind of value-producing function that
not only has no side effects but also doesn’t rely on side effects from other code
Still, there’s no need to feel bad when writing functions that are not pure or
to wage a holy war to purge them from your code. Side effects are often useful.*/

//Summary
// Define f to hold a function value
const f = function (a) {
    console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;