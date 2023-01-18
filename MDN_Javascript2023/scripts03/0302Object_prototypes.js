//建構子
function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

//建立原型物件instance
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);


const myObject = {
    city: "Taipei",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

let person2 = Object.create(person1);

console.log(person2.__proto__);
//回傳建構子屬性
console.log(person1.constructor);
console.log(person2.constructor);

let person3 = new person1.constructor('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'math'])
console.log(person3);
//回傳建構子名稱
console.log(person2.constructor.name);
myObject.greet();

