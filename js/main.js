// MENU FIXO

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("ativo");
    }else{
        header.classList.remove("ativo");
    }
});

// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
// =============================
// HEADER AO ROLAR
// =============================

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("ativo");
    } else {
        header.classList.remove("ativo");
    }
});

// =============================
// SCROLL SUAVE
// =============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// =============================
// CALCULADORA DE ECONOMIA
// =============================

function calcularEconomia() {

    const conta = parseFloat(document.getElementById("conta").value);

    if (isNaN(conta) || conta <= 0) {

        alert("Digite um valor válido.");

        return;

    }

    const economia = conta * 0.20;

    const novaConta = conta - economia;

    document.getElementById("resultado").innerHTML =
        "<h3>Resultado da Simulação</h3>" +
        "<p><strong>Conta Atual:</strong> R$ " + conta.toFixed(2) + "</p>" +
        "<p><strong>Economia Estimada:</strong> R$ " + economia.toFixed(2) + "</p>" +
        "<p><strong>Nova Conta:</strong> R$ " + novaConta.toFixed(2) + "</p>";

}

// =============================
// ANIMAÇÃO AO ENTRAR NA TELA
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section,.card,.passo,.faq-item,.card-beneficio").forEach(item => {

    observer.observe(item);

});
