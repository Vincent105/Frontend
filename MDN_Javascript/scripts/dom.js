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
