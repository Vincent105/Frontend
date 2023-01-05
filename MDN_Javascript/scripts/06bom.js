//全域變數
var msg = "Hello world!";
console.log(window.msg);

//location 

//換頁
//window.location.href = "https://www.google.com";

//location.hash = "title";
//location.replace("https://www.google.com");

//透過location 屬性 進行網址拆分
let link = document.createElement('a');
link.href = "https://www.google.com.tw/search?q=javascript"

console.log(link.protocol);
console.log(link.hostname);
console.log(link.pathname);
console.log(link.hash);
console.log(link.port);
console.log(link.search);

//history 物件
history.back();
history.forward();
history.go(-1);
history.go(1);
