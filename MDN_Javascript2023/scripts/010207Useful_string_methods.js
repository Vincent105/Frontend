let string = 'This is my string';
let browserType = 'mozilla';
//找出字串的長度（length）
browserType.length;
console.log(browserType.length);
//取得字符串中的特定字符（字符串字符）
browserType[0];
console.log(browserType[0]);
browserType[browserType.length - 1]
console.log(browserType[browserType.length - 1]);

//尋找字符串中的子字符串（substring）
browserType.indexOf('zilla');
console.log(browserType.indexOf('zilla'));
console.log(browserType.indexOf('vanilla'));

if (browserType.indexOf('mozilla') != -1) {
    console.log('Yes');
} else {
    console.log('No');
}

browserType.slice(0, 3);
console.log(browserType.slice(0, 3));
browserType.slice(2);
console.log(browserType.slice(2));

//改大小寫
let rawData = 'My NaMe Is MuD';
rawData.toUpperCase();
rawData.toLowerCase();
console.log(rawData.toUpperCase());
console.log(rawData.toLowerCase());

//更動部分字串
browserType = browserType.replace('moz','van');
console.log(browserType);

