// Seleciona todos os elementos uma única vez
const button = document.querySelector(".button");
const fadeBtn = document.getElementById("fadeBtn");
const mainTitle = document.getElementById("mainTitle");
const inputTitle = document.getElementById("inputTitle");
const aboutList = document.getElementById("aboutList");
const socialMedias = document.getElementById("socialMedias");
const ytLink = document.getElementById("ytLink");
const instaLink = document.getElementById("instaLink");
const backBtn = document.getElementById("backBtn");
const links = document.querySelectorAll("a");

// Função para reproduzir o som de clique
function playClickSound() {
    const clickSound = new Audio("fonts/click.mp3");
    clickSound.volume = 0.5;
    clickSound.currentTime = 0;
    clickSound.play();
}

// Funções de fade (mantidas as originais)
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

// Evento de clique para o botão principal "Clique Aqui"
fadeBtn.addEventListener("click", () => {
    playClickSound();

    fadeOut(fadeBtn);
    fadeOut(mainTitle, () => {
        fadeIn(inputTitle);
        fadeIn(aboutList);
        fadeIn(socialMedias);
        fadeIn(ytLink);
        fadeIn(instaLink);
        fadeIn(backBtn); // Mostra o botão "Voltar"
    });
});

// Evento de clique para o botão "Voltar"
backBtn.addEventListener("click", () => {
    playClickSound();

    fadeOut(inputTitle);
    fadeOut(aboutList);
    fadeOut(socialMedias);
    fadeOut(ytLink);
    fadeOut(instaLink);
    fadeOut(backBtn, () => { // Esconde o botão "Voltar" depois do fade-out
        fadeIn(mainTitle);
        fadeIn(fadeBtn);
    });
});

// Adiciona som de clique a todos os links
links.forEach(link => {
    link.addEventListener("click", (event) => {
        playClickSound();
    });
});