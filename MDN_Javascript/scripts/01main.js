//透過var宣告變數n，因為沒有給數值，此時n為undefined。
var n;
//透過var宣告變數m，給值
var m = 1;
var a = 5;
var b = 10;
let i = 2;

var str = "Vincent";
var str2 = 'Vin';
var str3 = 'My Name is ' + str;
var str4 = `My Name is ${str2}`; //樣板字面值

//樣板字面值
var hello = `第一行
第二行
第三行`;

//Test Case
const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name:' + '\\' + m + '\\' + n + '\\' + i);
    //let print_test1 = prompt(typeof true);
    //let print_test2 = prompt(typeof 'Vincent');
    //let print_test3 = prompt(typeof 123);
    //let print_test4 = prompt(typeof {});
    //let print_test5 = prompt(typeof []);
    //let print_test6 = prompt(typeof null);
    //let print_test7 = prompt(typeof window.alert);
    //let print_test8 = prompt(hello);
    console.log(hello);
    console.log(str3);
    console.log(str4);
    console.log(`Fifteen is ${a + b} and not ${2 * a + b}`); //樣板字面值支援內嵌運算

    console.log('isNaN(NaN):' + isNaN(NaN));
    console.log('isNaN(123):' + isNaN(123));
    console.log('isNaN("NaNs"):' + isNaN("NaN"));

    console.log('Number(null)=' + Number(null));
    console.log('Number(undefined)=' + Number(undefined));

    para.textContent = 'Player2:' + name;
}

//Test Case 2
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}

//Create object Case 1
var person = new Object;
person.name = "Vincent";
person.job = "IT";
person.sayName = function () {
    alert(this.name);
    alert(this.job);
}

person.sayName();

//Create object Case 2
var person1 = {
    name: "Esther",
    job: "ESport",
    sayName: function () {
        alert(this.name);
        console.log(person1["job"]);
    }
}

person1.sayName();

//Add 
person.test = "ncnu";
alert(person.test)

//Delete
delete person.test
console.log(person.test)