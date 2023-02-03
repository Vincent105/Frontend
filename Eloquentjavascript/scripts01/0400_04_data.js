//Data sets
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2 - 1]); //The first index of an array is zero(Zero-based)

//Properties
/*The two main ways to access properties in JavaScript are with a dot and with
square brackets. Both value.x and value[x] access a property on value
*/
console.log(listOfNumbers.length);
console.log(listOfNumbers["length"]);

//Methods
let doh = "Doh";
console.log(doh.toLowerCase);
console.log(doh.toLowerCase());
