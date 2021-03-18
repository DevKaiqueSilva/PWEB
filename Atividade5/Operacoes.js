var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let produto = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;
alert(`
    1ºNúmero: ${numero1}\n
    2ºNúmero: ${numero2}\n
    --------------------\n
    Soma: ${soma}\n
    Subtração: ${subtracao}\n
    Multiplicação: ${produto}\n
    Divisão: ${divisao}\n
    Resto da Divisão: ${resto}\n`
);