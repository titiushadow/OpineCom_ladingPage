// Navbar responsiva no mobile
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

// Mostrar divs melhores empresas e piores empresas no mobile
const mostrarPioresEmpresasBtn = document.getElementById("mostrar-piores-empresas");
const mostrarMelhoresEmpresasBtn = document.getElementById("mostrar-melhores-empresas");
const rankingGoodDiv = document.querySelector(".ranking-good");
const rankingBadDiv = document.querySelector(".ranking-bad");

mostrarPioresEmpresasBtn.addEventListener("click", function() {
    rankingGoodDiv.classList.add("hide");
    rankingBadDiv.classList.remove("hide");
});

mostrarMelhoresEmpresasBtn.addEventListener("click", function() {
    rankingBadDiv.classList.add("hide");
    rankingGoodDiv.classList.remove("hide");
});

// Carrosel de avaliações
const backButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const cardsAvali = document.querySelector(".row-avaliacoes div");
const cards = document.querySelectorAll(".cards-avaliacoes");
let currentCardIndex = 0;

backButton.addEventListener("click", function() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        cardsAvali.style.transform = `translateX(-${currentCardIndex * 100}%)`;
        cardsAvali.style.transition = "transform 0.8s ease-in-out";
    }
});

nextButton.addEventListener("click", function() {

})






