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

// Carrosel de imagens 
const left = document.querySelector("#arrow-left");
const right = document.querySelector("#arrow-right");
const hide = document.querySelector(".hide-card");

left.addEventListener("click", function() {
  if (hide) {
    hide.style.display = 'none';
  }
});

right.addEventListener("click", function() {

})













