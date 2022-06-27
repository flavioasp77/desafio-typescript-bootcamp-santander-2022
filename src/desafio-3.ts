const soma = document.getElementById('soma') as HTMLInputElement;
const btnAdd = document.getElementById('somar-ao-saldo') as HTMLButtonElement;
const saldo = document.getElementById('campo-saldo') as HTMLParagraphElement;
const btnLimparSaldo = document.getElementById('limpar-saldo') as HTMLButtonElement;

let saldoAtual = 0

function somarAoSaldo(soma: number) {
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

function limparSaldo() {
  saldo.innerHTML = '0';
}

btnLimparSaldo.addEventListener('click', () => {
  limparSaldo();
})
