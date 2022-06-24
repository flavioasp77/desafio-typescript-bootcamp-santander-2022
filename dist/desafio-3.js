"use strict";
const soma = document.getElementById('soma');
const btnAdd = document.getElementById('somar-ao-saldo');
const saldo = document.getElementById('campo-saldo');
const btnLimparSaldo = document.getElementById('limpar-saldo');
let saldoAtual = 0;
function somarAoSaldo(soma) {
    if (saldo) {
        saldoAtual += soma;
        saldo.innerHTML = saldoAtual.toString();
        clean();
    }
}
btnAdd.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});
function clean() {
    soma.value = '';
}
