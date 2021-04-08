let num1 = '', num2 = '', num3 = '';
do {
    num1 = prompt("Informe o primeiro número: ");
    if (isNaN(num1)) {
        alert("Informe um número válido.");
    }
} while (isNaN(num1) == true)
do {
    num2 = prompt("Informe o segundo número: ");
    if (isNaN(num2)) {
        alert("Informe um número válido.");
    }
} while (isNaN(num2) == true)
do {
    num3 = prompt("Informe o terceiro número: ");
    if (isNaN(num3)) {
        alert("Informe um número válido.");
    }
} while (isNaN(num3) == true)

const maiorNumero = (n1, n2, n3) => {
    let numbers = [n1, n2, n3];
    numbers.sort((a, b) => {
        return b - a;
    });
    return numbers[0];
}

alert('O maior número é : ' + maiorNumero(num1, num2, num3));


