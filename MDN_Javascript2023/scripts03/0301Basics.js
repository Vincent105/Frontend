let person = {
    name: ['Bob', 'Smith'],
    name2:{
        first : 'Bob',
        last : 'Smith'
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

//設定物件成員


setTimeout(() => { }, 1000)