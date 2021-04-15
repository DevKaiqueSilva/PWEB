//1
function Retangulo(x, y) {
    this.base = x;
    this.largura = y;
    this.calcular = function () {
        alert(this.base * this.largura);
    }
}
let trianguloTemp = new Retangulo(10, 20);
trianguloTemp.calcular();

//2
function Conta() {
    this.nome = "";
    this.banco = "";
    this.conta = "";
    this.saldo = 0;
    this.getNome = function () {
        return this.nome;
    }
    this.setNome = function (value) {
        this.nome = value;
    }
    this.getBanco = function () {
        return this.banco;
    }
    this.setBanco = function (value) {
        this.banco = value;
    }
    this.getConta = function () {
        return this.conta;
    }
    this.setConta = function (value) {
        this.conta = value;
    }
    this.getSaldo = function () {
        return this.saldo;
    }
    this.setSaldo = function (value) {
        this.saldo = value;
    }
}

function Corrente() {
    Conta.apply(this);
    var saldoEspecial = "";
    this.getSaldoEspecial = function () {
        return saldoEspecial;
    }
    this.setSaldoEspecial = function (value) {
        saldoEspecial = value;
    }
}

function Poupanca() {
    Conta.apply(this);
    var juros = "";
    var dataVenc = "";
    this.getJuros = function () {
        return this.juros;
    }
    this.getDataVenc = function () {
        return this.dataVenc;
    }
    this.setJuros = function (value) {
        this.juros = value;
    }
    this.setDataVenc = function (value) {
        this.dataVenc = value;
    }
}
let minhaPoupanca = new Poupanca();
minhaPoupanca.setNome("Kaique Silva");
minhaPoupanca.setConta("2222");
minhaPoupanca.setBanco("NuBank");
minhaPoupanca.setSaldo(1000);
minhaPoupanca.setDataVenc("15/04/2021");
minhaPoupanca.setJuros('10%');
let minhaContaCorrente = new Corrente();
minhaContaCorrente.setNome("Kaique Silva");
minhaContaCorrente.setConta("2222");
minhaContaCorrente.setBanco("NuBank");
minhaContaCorrente.setSaldo(1000);
minhaContaCorrente.setSaldoEspecial(2000);

//
console.log('POUPANÇA',minhaPoupanca);
console.log('CONTA CORRENTE',minhaContaCorrente);