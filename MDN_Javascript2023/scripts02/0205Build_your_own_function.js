let btn = document.querySelector('button');

//btn.onclick = displayMessage;//沒有在函數名稱後加上括號。因為不想立即調用該函數
btn.onclick = function () {
    displayMessage('Woo, this is a different message!', 'Warning');
};

function displayMessage(msgText, msgType) {
    let html = document.querySelector('html');

    let panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    let msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function () {
        panel.parentNode.removeChild(panel);
    }

    if (msgType === 'Warning'){
        panel.style.backgroundColor = 'red';
    } else {
        panel.style.backgroundColor = 'green';
    }
}

