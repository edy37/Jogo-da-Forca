
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavras01 = {
        nome: "ALEMANHA",
        categoria: "País"
    },
    palavras02 = {
        nome: "BRASIL",
        categoria: "País"
    },
    palavras03 = {
        nome: "BELGICA",
        categoria: "País"
    },
    palavras04 = {
        nome: "ITALIA",
        categoria: "País"
    },
    palavras05 = {
        nome: "ARGENTINA",
        categoria: "País"
    },
    palavras06 = {
        nome: "GOL",
        categoria: "Carro"
    },
    palavras07 = {
        nome: "HILLUX",
        categoria: "Carro"
    },
    palavras08 = {
        nome: "CELTA",
        categoria: "Carro"
    },
    palavras09 = {
        nome: "CAMARO",
        categoria: "Carro"
    },
    palavras10 = {
        nome: "CORROLA",
        categoria: "Carro"
    },

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregarImgForca();

        if(tentativas == 0) {
            abreModal("OPS!", "Não foi dessa vez ... A palavra correta é: " + palavraSecretaSorteada);
        }
        
    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if(palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
            
        }
    }
    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if(palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }
    if(vitoria == true) {
        abreModal("Parabéns!", "Você venceu !!!");
        tentativas = 0;
    }
}

function carregarImgForca() {
    switch (tentativas) {
        case 5:
            document.getElementById('imagem').style.background = "url('./img/forca01.png')"
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./img/forca02.png')"
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./img/forca03.png')"
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./img/forca04.png')"
            break;
        case 1:
            document.getElementById('imagem').style.background = "url('./img/forca05.png')"
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca06.png')"
            break;
        default:
            document.getElementById('imagem').style.background = "url('./img/forca.png')"
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalMensagem = document.getElementById("modalBody");
    modalMensagem.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
});
