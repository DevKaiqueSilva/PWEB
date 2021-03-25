
let resultado = null;
alert("Vamos jogar JOKENPÔ!!");
let jogadas = [{ id: "1", jogada: "Pedra", rangeMin: 0, rangeMax: 32, win: "2", lose: "3" },
{ id: "2", jogada: "Tesoura", rangeMin: 33, rangeMax: 65, win: "3", lose: "1" },
{ id: "3", jogada: "Papel", rangeMin: 66, rangeMax: 99, win: "1", lose: "2" }]
while (resultado == null) {
    let maoUsuario = null;
    let maoComputador = parseFloat((Math.random() * 100).toFixed(0));
    maoUsuario = prompt(`Escolha uma entre as três opções:\n
        1 - Pedra\n
        2 - Tesoura\n
        3 - Papel\n
        Digite o número ou nome da jogada:`);
    if (maoUsuario == null) {
        alert("Não é possível cancelar.\nDigite uma das opções.")
    } else if (jogadas.filter(item => {
        return item.id == maoUsuario || item.jogada.toLowerCase() == maoUsuario.toLowerCase()
    }).length == 0) {
        alert("Digite uma opcão válida.");
    } else {
        let jogadaSelected = jogadas.filter(item => { return item.id == maoUsuario || item.jogada.toLowerCase() == maoUsuario.toLowerCase() })[0];
        let jogadaSelectedPC = jogadas.filter(item => { return maoComputador >= item.rangeMin && maoComputador <= item.rangeMax })[0];
        console.log("JOGADOR:", jogadaSelected);
        console.log("RANDOM:", maoComputador);
        console.log("PC:", jogadaSelectedPC);
        alert(`VOCÊ: ${jogadaSelected.jogada}\nVS\nPC: ${jogadaSelectedPC.jogada}`);
        if (jogadaSelectedPC.jogada == jogadaSelected.jogada) {
            alert("EMPATE. TENTE NOVAMENTE");
            resultado = null;
        } else if (jogadaSelected.win == jogadaSelectedPC.id) {
            resultado = 1;
        } else if (jogadaSelected.lose == jogadaSelectedPC.id) {
            resultado = 0;
        }
    }
}
if (resultado == 0) {
    alert("Você Perdeu!!");
} else if (resultado == 1) {
    alert("Você Ganhou!! Parabéns")
}

