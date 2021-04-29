onHoverImg = (e) =>{
    // document.getElementById("titulo").innerText="JANELA ABERTA";
    e.src = '../img/janelaaberta.png';
}

onClickImg = (e) => {
    // document.getElementById("titulo").innerText="JANELA QUEBRADA";
    e.src = '../img/janelaquebra.png';
}

onOutImg = (e) => {
    document.getElementById("titulo").innerText="ABRA A JANELA";
    e.src = '../img/janelafechada.png';
}