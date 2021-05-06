const validar = () => {
    let nome = document.form.elements[0].value;
    let email = document.getElementById("email").value;
    let comentario = document.getElementById("comentario").value;
    let sim = document.getElementById("rbSim").checked;
    let nao = document.getElementById("rbNao").checked;
    if(!!nome==false || nome.length<10){
        alert("O nome não pode ter menos que 10 caracteres!");
        return;
    }
    if(!!email==false || email.includes("@")==false || email.includes(".")==false){
        alert("Verifique o e-mail");
        return;
    }   
    if(sim==false && nao ==false){
        alert("Preencha a pesquisa!");
        return;
    }
    if(nao==true){
        alert("Que bom que você voltou a visitar esta página!")
    }else if(sim==true){
        alert("Volte sempre a está página!");
    }

}