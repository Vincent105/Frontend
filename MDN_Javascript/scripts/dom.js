document.querySelector('#greet').textContent = 'Hello World';

var p = document.querySelector('p');
console.log(p.firstChild.tagName);
console.log(p.lastChild.tagName);

var e1 = document.querySelector('span');
console.log(e1.parentNode.tagName);
console.log(e1.previousSibling);

var e12 = document.querySelectorAll('span')[2];
console.log(e12.previousSibling.textContent);

var e12 = document.querySelector('span');
console.log(e12.nextSibling.nextSibling.textContent);

var outerdiv = document.getElementById('outer');
var alldiv = document.getElementsByTagName('div');
console.log(alldiv.length);
outerdiv.innerHTML = '';
console.log(alldiv.length);

//create Div
let newDiv = document.createElement('div');
let textNode = document.createTextNode("Hello World!!");

newDiv.id = "test";
newDiv.className = "box";
newDiv.appendChild(textNode);

//Create Fragment
let ul = document.getElementById("mylist");
let fragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++)
{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode("Item" + (i + 1)));
    fragment.appendChild(li);
}

ul.appendChild(fragment);


//DOM append
let mylist = document.getElementById("mylist");