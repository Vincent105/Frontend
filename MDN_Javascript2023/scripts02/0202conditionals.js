let select = document.getElementById('weather');
let para = document.querySelector('p');
let select2 = document.getElementById('theme');
let html = document.querySelector('html');

select.addEventListener('change', setWeather);
select2.onchange = function () {
    (select2.value === 'black') ? update('black', 'white') : update('white', 'black');
    console.log(document.getElementById('theme').value);
}

function setWeather() {
    let choice = select.value;

    switch (choice) {
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today.';
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside.';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down';
            break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy';
            break;
        default:
            para.textContent = '';
    }
}

function update(bgcolor, textcolor) {
    html.style.backgroundColor = bgcolor;
    html.style.color = textcolor;
}
