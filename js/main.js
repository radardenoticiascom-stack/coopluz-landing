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

function calcular() {
    alert("A função calcular() está funcionando!");
}

    

    if (isNaN(valor) || valor <= 0) {
        alert("Informe um valor válido para a conta de energia.");
        return;
    }

    // Economia de 20%
    const economiaMensal = valor * 0.20;
    const economiaAnual = economiaMensal * 12;
    const economiaCincoAnos = economiaAnual * 5;

    // Estimativa de consumo
    const tarifaMedia = 0.85;
    const consumoMensal = valor / tarifaMedia;

    // Economia de energia
    const energiaEconomizadaAno = (consumoMensal * 0.20) * 12;

    // Fator médio de emissão da rede elétrica brasileira
    const fatorCO2 = 0.0385;

    const co2 = energiaEconomizadaAno * fatorCO2;

    document.getElementById("mes").innerHTML =
        economiaMensal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("ano").innerHTML =
        economiaAnual.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("cincoAnos").innerHTML =
        economiaCincoAnos.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("co2").innerHTML =
        co2.toFixed(1) + " kg";

    const mensagem =
`Olá! Fiz uma simulação no site da CoopLuz.

💡 Valor da minha conta: ${valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}

💰 Economia estimada por mês: ${economiaMensal.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}

Gostaria de receber uma proposta.`;

    document.getElementById("whatsapp").href =
        "https://wa.me/5562992686860?text=" +
        encodeURIComponent(mensagem);

}
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
