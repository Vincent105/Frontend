//透過Css設定不同class，透過Js轉換class_name，實際上還是由Css控制。
let article = document.querySelector('#article');
article.className = "small-font";

//當class有多組的時候，可以透過classList 移除class 添加class。
let article2 = document.querySelector('.article');
article2.classList.remove('small-font');
article2.classList.add('large-font');


//直接透過Js控制Css屬性，(不建議)，建議關注點分離
let box = document.querySelector('.box');

box.style.color = 'red';
box.style.fontSize = '24px';

//直接透過Js寫入Css樣式 Case 1 (不建議)
document.write('<link rel="stylesheet" href="">');

//直接透過Js寫入Css樣式 Case 2 (不建議)
let head = document.querySelector('head');
let linkTag = document.createElement('link');

if (1 === 1){
    linkTag.rel = "stylesheer";
    linkTag.href = "styles/05dom_style.css";
    linkTag.type = "text/css";

    head.appendChild(linkTag);
}

