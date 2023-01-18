let person = {
    name: ['Bob', 'Smith'],
    name2: {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function () {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function () {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

//存取物件的方式: 點記法 (Dot notation)
console.log(person.age);
console.log(person.interests[1]);
console.log(person.name[0]);
console.log(person.name2.last);

//存取物件的方式: 括弧記法(Bracket notation)
console.log(person['age']);
console.log(person['name2']['first']);

//更新物件成員
person.age = 45
console.log(person.age);
person.name.last = 'Cratchit';
console.log(person.name.last);

//新增物件成員
person.eye = 'test'
console.log(person.eye);
person.farewell = function () { alert("Bye everybody!") };

let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;
console.log(person[myDataName]);

// 這個「this」是什麼？
let person1 = {
    name: 'Chris',
    greeting: function () {
        alert('Hi I\'m' + this.name);
    }
}

let person2 = {
    name: 'Vincent',
    greeting: function (){
        alert('Hi I\'m' + this.name);
    }
}

setTimeout(() => { }, 1000)