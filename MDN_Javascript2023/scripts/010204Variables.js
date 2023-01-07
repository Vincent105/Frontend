const button = document.querySelector('button');
console.log(button);
var myHeading = document.querySelector('h1');
console.log(myHeading);

button.onclick = function () {
    let name = prompt('請輸入姓名：');
    alert('Hi ' + name);
    myHeading.textContent = 'Hi ' + name;
}

//初始化變量 (Initializing a variable)
let myName;
let myAge;

myName = 'Vincent';
myAge = 38;

let myBird = '麻吉';

/*比較 var 和 let 的不同（var 和 let 的區別）
 */

var myName1 = 'Chris';
var myName1 = 'Bob';

let myName2 = 'Chris';
//let myName2 = 'Bob';  無法重新宣告區塊範圍變數 'myName2'；let無法重新聲明變量，這是好的作法。
//盡可能使用let，不要使用var。let是直到ie11才有支援。

/*更新變量
 */
myName = 'Vincent1';
myAge = 39;

/*變數資料類型
 */
let myAge1 = 17;
let dolphinGoodbye = 'So long and thanks for all the fish';
let iAmAlive = true;
let test = 6 < 3;
//Arrays陣列
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];
console.log(myNameArray[0]);
console.log(myNumberArray[2]);

//Objects物件
let dog = { name: 'Spot', breed: 'Dalmatian'};
console.log(dog.name);

//JavaScript是一個動態型別的語言，不像其他強型別程式語言，宣告變數時不用指定資料類型
let myString = 'Hello';
let myNumber = '500'; // oops, this is still a string
console.log(typeof myNumber);
myNumber = 500; // much better — now this is a number
console.log(typeof myNumber);

//JavaScript常數
const daysInWeek = 7;
const hoursInDay = 24;
    //daysInWeek = 8;   Uncaught TypeError: Assignment to constant variable.
    