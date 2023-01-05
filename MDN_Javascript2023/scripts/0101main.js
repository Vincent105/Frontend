/*hello world
 */
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';


/*變數（Variables）會區分大小寫字母，let、Var、const都可以用來宣告變數
 */
let myVariable = 'Bob';
//console.log('myVariable='+myVariable)
myVariable = 'Vin';
//console.log('myVariable='+myVariable)


/*資料型態
 */
let myVariable1 = 'Bob';
let myVariable2 = 10;
let myVariable3 = true;
let myVariable4 = [1, 'Bob', true];
//console.log('myVariable4[0]='+myVariable4[0]);
//console.log('myVariable4[1]='+myVariable4[1]);
//console.log('myVariable4[2]='+myVariable4[2]);
let myVariable5 = document.querySelector('h1'); //Object


/*運算子（Operators）
 */
let myVariable6 = 6 + 9;
//console.log(myVariable6);
let myVariable7 = 'Hello ' + 'World';
//console.log(myVariable7);
let myVariable8 = 6 * 9;
let myVariable9 = 3;
//console.log(myVariable9 === 4);
//console.log(myVariable9 !== 3);
//console.log(!(myVariable9 === 3));

/*條件（Conditionals）
 */
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Welcome');
} else {
    alert('Bye');
}

/*函式（Functions
 */
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
console.log('multiply(2,4)=' + multiply(2, 4));
console.log('multiply(110,4)=' + multiply(110, 4));

/*事件（Events）
 */
document.querySelector('ul').onclick = function () {
    alert("don't touch me");
}

var myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/0101firefox-icon.png') {
        myImage.setAttribute('src', 'images/0101firefox-icon2.png');
    } else {
        myImage.setAttribute('src', 'images/0101firefox-icon.png');
    }
}