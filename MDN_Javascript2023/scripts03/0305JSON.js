let header = document.querySelector('header');
let section = document.querySelector('section');

//載入JSON
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

//產生標頭
function populateHeader(jsonObj) {
    let myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    let myPara = document.createElement('p');
    myPara.textContent = 'Hometown:' + jsonObj['homeTown'] + ' // Formed:' + jsonObj['formed'];
    header.appendChild(myPara);
}

//建立超級英雄的資訊卡片
function showHeroes(jsonObj) {
    let heroes = jsonObj['members'];

    for (i = 0; i < heroes.length; i++) {
        let myArticle = document.createElement('article');
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = heroes[i].secretIdentity;
        myPara2.textContent = 'Age:' + heroes[i].age;
        myPara3.textContent = 'Super power:';

        let superPowers = heroes[i].powers;
        for (j = 0; j < superPowers.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}