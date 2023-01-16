let select = document.querySelector('select');
let para = document.querySelector('p');
let temperature = 86;

select.addEventListener('change', setWeather);

/*Nesting if ... else
 */
function setWeather() {
    let choice = select.value;
    if (choice === 'sunny') {
        if (temperature < 86) {
            para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
        } else if (temperature >= 86) {
            para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
        }
    }
    else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain \
        coat and a brolly, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }
}

//Logical operators: AND, OR and NOT (&& ||)