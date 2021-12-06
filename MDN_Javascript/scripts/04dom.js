//找尋節點之後，加入文字
document.querySelector('#greet').textContent = 'Hello World';

//取得節點屬性
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

//Create Fragment 在虛擬容器中進行處理
let ul = document.getElementById("mylist");
let fragment = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode("Item 0" + (i + 1)));
    fragment.appendChild(li);
}

ul.appendChild(fragment);

//DOM節點修改 Node.appendChild
let mylist = document.getElementById('mylist'); //取得容器
let newlist = document.createElement('li'); //建立元素
let textNode1 = document.createTextNode("Hello !!");
newlist.appendChild(textNode1);
mylist.appendChild(newlist);

//DOM節點修改 Node.inserBefore
let mylist2 = document.getElementById('mylist');
let refnode = document.querySelectorAll('li')[1];

let newList2 = document.createElement('li');
let textNode2 = document.createTextNode("For Test??");
newList2.appendChild(textNode2);
mylist2.insertBefore(newList2, refnode);

//DOM節點修改 Node.replaceChild
let mylist3 = document.getElementById('mylist');
let oldnode = document.querySelectorAll('li')[1];

let newlist3 = document.createElement('li');
let textNode3 = document.createTextNode("New content??????");
newlist3.appendChild(textNode3);
mylist3.replaceChild(newlist3,oldnode);

