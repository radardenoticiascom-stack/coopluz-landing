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
// MENU HAMBÚRGUER (MOBILE)
// =============================

const menuToggle = document.getElementById("menuToggle");
const menuLista = document.getElementById("menuLista");

if (menuToggle && menuLista) {

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("ativo");
        menuLista.classList.toggle("ativo");
    });

    // Fecha o menu ao clicar em qualquer link
    menuLista.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("ativo");
            menuLista.classList.remove("ativo");
        });
    });

}

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

    const valorInput = document.getElementById("valor");
    const valor = parseFloat(valorInput.value.replace(",", "."));

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

💡 Valor da minha conta: ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}

💰 Economia estimada por mês: ${economiaMensal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}

Gostaria de receber uma proposta.`;

    document.getElementById("whatsapp").href =
        "https://wa.me/5562992686860?text=" +
        encodeURIComponent(mensagem);

}

// =============================
// FORMULÁRIO DE CONTATO (WEB3FORMS)
// =============================

const leadForm = document.getElementById("leadForm");
const formStatus = document.getElementById("formStatus");

if (leadForm) {

    leadForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const botao = leadForm.querySelector("button[type='submit']");
        const textoOriginal = botao.textContent;

        botao.disabled = true;
        botao.textContent = "Enviando...";
        formStatus.textContent = "";
        formStatus.className = "form-status";

        const dados = new FormData(leadForm);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: dados
        })
        .then(res => res.json())
        .then(resultado => {
            if (resultado.success) {
                formStatus.textContent = "Solicitação enviada com sucesso! Em breve entraremos em contato.";
                formStatus.classList.add("sucesso");
                leadForm.reset();
            } else {
                formStatus.textContent = "Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.";
                formStatus.classList.add("erro");
            }
        })
        .catch(() => {
            formStatus.textContent = "Erro de conexão. Tente novamente ou fale pelo WhatsApp.";
            formStatus.classList.add("erro");
        })
        .finally(() => {
            botao.disabled = false;
            botao.textContent = textoOriginal;
        });

    });

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
