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
let person1 = new Person('Bob', 'Smith', 66, 'female', ['music', 'skiing']);

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

let person3 = new person1.constructor('Vincent', 'Smith', 32, 'male', ['music', 'skiing', 'math'])

console.log(person3);

//回傳建構子名稱
console.log(person2.constructor.name);
console.log(person3.name.first);
console.log(person3.age);
myObject.greet();

//修改原型
Person.prototype.farewell = function () {
    alert(this.name.first + ' has left the building. Bye');
}

person3.farewell();

//實務建議作法：在建構子中定義屬性，而在原型中定義函式
function Test(a, b, c, d) {
    // property definitions
};

// First method definition
Test.prototype.x = function () { }

// Second method definition
Test.prototype.y = function () { }
