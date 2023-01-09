let string = 'test';
string;

let badstring = string;
badstring;

//字串中的跳脫字元（Escaping characters）
let bigMouth = 'I\' have a dream...';
bigMouth;

//連接字串（Concatenating strings）
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;

//型別轉換
let myString = '123';
let myNum = Number(myString);
console.log(typeof (myNum));

let myNum1 = 123;
let myString1 = myNum1.toString();
console.log(typeof (myString1));

//模版字符串(Template literals)
let song = 'Fight the Youth';
let score = 9;
let highestScore = 10;
output = `I like the song "${song}". I gave it a score of ${score / highestScore * 100}%.`;
console.log(output)

let examScore = 45;
let examHighScore = 70;
examReport = `You scorec ${examScore}/${examHighScore}(${Math.round((examScore / examHighScore) * 100)}%).${examScore >= 49 ? 'Welldone' : 'bad luck'}`;
console.log(examReport);

output = 'I like the song "' + song + '".\nI gave it a score of ' + (score / highestScore * 100) + '%.';
console.log(output)