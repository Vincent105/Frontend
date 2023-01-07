/*按鈕互動練習
 */
const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('輸入新的名字');
    para.textContent = 'Player：' + name;
}

function creatPara() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}

const button = document.querySelectorAll('button');

for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click',creatPara);
}