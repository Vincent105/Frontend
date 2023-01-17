const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
/* Declaring the array of image filenames */
/* Declaring the alternative text for each image file */
/* Looping through images */
let filenames = ['0207pic1.jpg:0207pic1', '0207pic2.jpg:0207pic2',
    '0207pic3.jpg:0207pic3', '0207pic4.jpg:0207pic4', '0207pic5.jpg:0207pic5'];

for (i = 0; i < filenames.length; i++) {
    let imgPath = filenames[i].split(':');

    const newImage = document.createElement('img');
    newImage.setAttribute('src', '../images/' + imgPath[0]);
    newImage.setAttribute('alt', imgPath[1]);
    thumbBar.appendChild(newImage);

    newImage.onclick = function () {
        newSrc = newImage.src;
        displayedImage.setAttribute("src", newSrc);
        newAlt = newImage.alt;
        displayedImage.setAttribute("alt", newAlt);
    }
}

btn.onclick = function () {
    changeColor();
}

function changeColor() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
    }
}

/* Wiring up the Darken/Lighten button */
