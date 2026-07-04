// =========================
// CALCULADORA COOPLUZ
// =========================

function calcular() {

    const valor = parseFloat(document.getElementById("valor").value);

    if (isNaN(valor) || valor <= 0) {
        alert("Digite o valor da sua conta de energia.");
        return;
    }

    const economiaMensal = valor * 0.20;
    const economiaAnual = economiaMensal * 12;

    document.getElementById("mes").innerHTML =
        "R$ " + economiaMensal.toFixed(2).replace(".", ",");

    document.getElementById("ano").innerHTML =
        "R$ " + economiaAnual.toFixed(2).replace(".", ",");

    const mensagem =
`Olá!

Quero fazer uma simulação na CoopLuz.

Minha conta média é de R$ ${valor.toFixed(2).replace(".", ",")}.`;

    document.getElementById("whatsapp").href =
        "https://wa.me/5562984596663?text=" +
        encodeURIComponent(mensagem);
}

// =========================
// MENU FIXO
// =========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 60) {
        header.classList.add("ativo");
    } else {
        header.classList.remove("ativo");
    }

});

// =========================
// ANO AUTOMÁTICO
// =========================

const copy = document.querySelector(".copy");

if (copy) {
    copy.innerHTML =
        "© " + new Date().getFullYear() +
        " CoopLuz - Todos os direitos reservados.";
}
