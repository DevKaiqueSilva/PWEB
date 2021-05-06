
const onMinuscula = () => {
    let minuscula = document.getElementById("texto").value.toLowerCase();
    document.getElementById("texto").value = minuscula;
}

const onMaiuscula = () => {
    let maiuscula = document.getElementById("texto").value.toUpperCase();
    console.log(maiuscula);
    document.getElementById("texto").value = maiuscula;
}

