
function alternar(btn){
    btn.classList.toggle("marcado");
}

function toggleCheck(el){
    el.classList.toggle("marcado");
}

function alternarTema(){
    document.body.classList.toggle("dark");

    const botao = document.querySelector(".tema-toggle");
    botao.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function calcularTotal() {
    const valorHora = parseFloat(document.getElementById("calc-valor-hora").value);
    const horas = parseFloat(document.getElementById("calc-horas").value);
    const resultadoSpan = document.getElementById("calc-total");

    if (isNaN(valorHora) || isNaN(horas)) {
        resultadoSpan.textContent = "0,00";
        return;
    }

    const total = valorHora * horas;
    resultadoSpan.textContent = total.toFixed(2).replace(".", ",");
}
