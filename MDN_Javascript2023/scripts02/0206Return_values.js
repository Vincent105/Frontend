const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
    return num * num;
}

function cube(num) {
    return num * num * num;
}

input.onchange = function () {
    let num = input.value;
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = num + 'squared:' + squared(num) + 'cube:' + cube(num);
    }
}
