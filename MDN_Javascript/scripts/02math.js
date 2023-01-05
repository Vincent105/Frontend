//It's all numbers to me
let myInt = 5;
let myFloat = 6.664;

console.log(typeof (myInt));
console.log(typeof (myFloat));

//Useful Number methods 四捨五入
let lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);

let lotsOfDecimal_fix = lotsOfDecimal.toFixed(2);
console.log(lotsOfDecimal_fix);

//Useful Number methods 轉型
let myNUmber = "743";
console.log(myNUmber += 3);
console.log(Number(myNUmber) + 3);

let myNUmber2 = 743;
console.log(myNUmber2 + 3);
console.log(Number(myNUmber2) + 3);

//Case logic 
const btn = document.querySelector('Button');
const txt = document.querySelector('p');

btn.addEventListener('click' , updatestatus);

function updatestatus () {
    if (btn.textContent == 'Start machine') {
        btn.textContent = 'Stop machine'
        txt.textContent = 'The machine has started!'
    }
    else{
        btn.textContent = 'Start machine'
        txt.textContent = 'The machine is stopped!'
    }
}

// !==  以及  === 比較符號是不會自動轉型 ; != 以及 == 將自動轉型後比較