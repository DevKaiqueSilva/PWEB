let num1, num2, num3;
num1 = prompt("Informe o primeiro número: ");
num2 = prompt("Informe o segundo número: ");
num3 = prompt("Informe o terceiro número: ");

const maiorNumero = (n1, n2, n3) => {
    let numbers = [n1, n2, n3];
    numbers.sort((a, b) => {
        return b - a;
    });
    return numbers[0];
}

alert(maiorNumero(num1, num2, num3));


