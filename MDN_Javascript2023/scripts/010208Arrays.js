let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];

console.log(shopping);

//存取並修改陣列的單位
console.log(shopping[0]);
shopping[0] = 'tahini';
console.log(shopping[0]);
console.log(random[2][2]);

//找出陣列長度
shopping.length;

for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

/*好用的陣列方法
 */
//在字串與陣列之間轉換
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(myArray);
console.log(myArray[myArray.length - 1]);
let myString = myArray.join(',');
console.log(myString);
let dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
console.log(dogNames.toString());

//新增與移除陣列單位
let myArray1 = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArray1.push('Cardiff');
console.log(myArray1);
myArray1.push('Bradford', 'Brighton');
console.log(myArray1);

//從尾處理
let newLength = myArray1.push('Bristol');
console.log(myArray1);
console.log(newLength);

myArray1.pop();
let removedItem = myArray1.pop();
console.log(myArray1);
console.log(removedItem);

//從頭處理
myArray1.unshift('Edinburgh');
console.log(myArray1);
let removedItem1 = myArray1.shift();
console.log(myArray1);
console.log(removedItem1);

/*新增陣列與移除陣列練習
 */
let list = document.querySelector('.output ul');
let searchInput = document.querySelector('.output input');
let searchButton = document.querySelector('.output button');

list.innerHTML = '';
searchInput.focus();

let myHistory = [];

searchButton.onclick = function () {
    if (searchInput.value !== '') {
        myHistory.unshift(searchInput.value);
        list.innerHTML = '';

        for (let i = 0; i < myHistory.length; i++) {
            itemText = myHistory[i];
            let listItem = document.createElement('li');
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }
    }
    if (myHistory.length >= 5) {
        myHistory.pop();
    }
    searchInput.value = '';
}


setTimeout(() => { }, 1000)