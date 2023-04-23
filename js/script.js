var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

const mostrarPioresEmpresasBtn = document.getElementById("mostrar-piores-empresas");
const mostrarMelhoresEmpresasBtn = document.getElementById("mostrar-melhores-empresas");
const rankingGoodDiv = document.querySelector(".ranking-good");
const rankingBadDiv = document.querySelector(".ranking-bad");

mostrarPioresEmpresasBtn.addEventListener("click", function() {
    console.log("Clicou em piores empresas");
    rankingGoodDiv.classList.add("hide");
    rankingBadDiv.classList.remove("hide");
});

mostrarMelhoresEmpresasBtn.addEventListener("click", function() {
    console.log("Clicou em melhores empresas");
    rankingBadDiv.classList.add("hide");
    rankingGoodDiv.classList.remove("hide");
});




