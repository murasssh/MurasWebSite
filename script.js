const button = document.querySelector(".button");



button.addEventListener("click", () => {

const clickSound = new Audio("fonts/click.mp3");

clickSound.volume = 0.5; // diminui para 50%

clickSound.currentTime = 0.1; // garante que comece do início

clickSound.play();

});



const btn = document.getElementById("fadeBtn");

const mainTitle = document.getElementById("mainTitle");

const inputTitle = document.getElementById("inputTitle");

const aboutList = document.getElementById("aboutList");

const socialMedias = document.getElementById("socialMedias");

const ytLink = document.getElementById("ytLink");

const instaLink = document.getElementById("instaLink");



function fadeOut(element, callback) {

element.style.transition = "opacity 1.5s";

element.style.opacity = 0;

setTimeout(() => {

element.classList.add('hidden');

if (callback) callback();

}, 1500);

}



function fadeIn(element) {

element.classList.remove('hidden');

element.style.opacity = 0;

element.style.transition = "opacity 1.5s";

setTimeout(() => {

element.style.opacity = 1;

}, 10);

}



btn.onclick = function() {

fadeOut(btn);

fadeOut(mainTitle, () => {

fadeIn(inputTitle);

fadeIn(aboutList);

fadeIn(socialMedias);

fadeIn(ytLink);

fadeIn(instaLink);

});

};

const backBtn = document.getElementById("backBtn");



btn.onclick = function() {

fadeOut(btn);

fadeOut(mainTitle, () => {

fadeIn(inputTitle);

fadeIn(aboutList);

fadeIn(socialMedias);

fadeIn(ytLink);

fadeIn(instaLink);

fadeIn(backBtn); // mostra o botão de voltar

});

};



backBtn.addEventListener("click", () => {

const clickSound = new Audio("fonts/click.mp3");

clickSound.volume = 0.5;

clickSound.currentTime = 0;

clickSound.play();



fadeOut(inputTitle);

fadeOut(aboutList);

fadeOut(socialMedias);

fadeOut(ytLink);

fadeOut(instaLink);

fadeOut(backBtn, () => {

fadeIn(mainTitle);

fadeIn(btn);

});

});

// Add click sound to all links

const links = document.querySelectorAll("a");

links.forEach(link => {

link.addEventListener("click", (event) => {

const clickSound = new Audio("fonts/click.mp3");

clickSound.volume = 0.5;

clickSound.currentTime = 0;

clickSound.play();

});

});

