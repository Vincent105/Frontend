let cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called';
let para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        info += ' and ' + cats[i] + '.';
    } else {
        info += cats[i] + ',';
    }
}

para.textContent = info;

let contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
let input = document.querySelector('input');
let btn = document.querySelector('button');
let para2 = document.querySelector('button').nextElementSibling;

btn.addEventListener('click', searchName);

function searchName() {
    let searchName = input.value;
    input.value = '';
    para2.textContent = '';
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        let splitContacts = contacts[i].split(':');
        console.log(splitContacts[0] + ':' + splitContacts[1]);
        if (splitContacts[0] === searchName) {
            para2.textContent = splitContacts[0] + '\' phone:' + splitContacts[1];
            break;
        } else {
            para2.textContent = 'Contact not found.';
        }
    }
}

/* continus
 */

/*while do...while
 */
var i = 0;

while (i < cats.length) {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++;
}

var i = 0;

do {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++;
} while (i < cats.length);