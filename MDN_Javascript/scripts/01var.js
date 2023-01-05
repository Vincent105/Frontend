const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = function () {
    let name = prompt('What is your name?');
    alert('Hello ' + name + ', nice to see you!');
    headingA.textContent = 'Welcome ' + name;
}

//聲明變量
let myName;
let myAge;

//初始化變量
myName = "Vincent";
myAge = 37;

//聲明與初始化變量
let myBird = "Macchi";

//Var聲明變量，使用 時var，您可以根據需要多次聲明相同的變量，但let不能。
var myName2;
var myAge2;

//陣列
let myNameArray = ['Vincent', 'Vin'];
let myNumberArray = [32, 12];

//物件
let dog = {
    name: 'spot',
    breed: 'dalmation'
};

//常量
const count = 1;

//何時使用 const 何時使用 let?
//Use const when you can, and use let when you have to.
//This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.

function logName() {
    console.log(myName);
    console.log(myNumberArray[1]);
    console.log(dog.name);
    console.log(count);
}

logName();



//Create Array 1
var a = new Array();

a[0] = "apple";
a[1] = "boy";
a[2] = "cat";

console.log(a.length);

//Create Array 2
var b = [];

b[0] = "a";
b[1] = "b";
b[2] = "c";

console.log(b.length);

//Create Array 3
var c = ["a", "b", "c"];
console.log(c);
console.log(c.length);

//Add Array element
c[7] = "g"
console.log(c);

c.push("d");
console.log(c);

//Delete Array element
c.pop();