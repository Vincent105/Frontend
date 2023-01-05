const string = "The revolution will not be televised.";
console.log(string);

//連接字符串
const greeting = `Hello`;
const name1 = 'Vincent';
const greeting2 = `Hello,${name1}`;

const one = `Hello`;
const two = `How are you?`;
const join = `${one}${two}`;

console.log(greeting2);
console.log(join);

//連接字符串 Test Case
const button = document.querySelector('button');
const txt = document.querySelector('p');

function greet(){
    let name1 = prompt("What your name?");
    alert(`Hello${name1}`);
    txt.textContent =  `Hi ${name1}`; 
}

button.addEventListener('click', greet);

//字符串 轉型 數值
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

//在字符串中包含表達式
const song = 'Fight the Youth';
const score = 9;
const highestscore = 10;
const output = `I like the ${song}.score:${score/highestscore}`;
console.log(output);

//多行字符串
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);  

const output = 'I like the song.\nI gave it a score of 90%.';
console.log(output);



