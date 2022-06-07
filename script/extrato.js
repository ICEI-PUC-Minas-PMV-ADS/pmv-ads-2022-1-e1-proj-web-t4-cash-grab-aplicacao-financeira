//Definindo variavel 
//Let nome da variavel = document.getElementById (nome do Id)
    let Input_campoData = document.getElementById ("campoData") 
    let butoon_adicionar = document.getElementById ("adicionar")
    let Data = document.getElementById ("Data")

    let Input_campoTipo = document.getElementById ("campoTipo")
    let Tipo = document.getElementById ("Tipo")

    let Input_campoDescricao = document.getElementById ("campoDescricao")
    let Descricao = document.getElementById ("Descrição")

    let Input_campoValor = document.getElementById ("campoValor")
    let Valor = document.getElementById ("Valor")


function colocarExtrato( ) { 
    let textData = document.createElement ("p") //variavel para criacao de elemento
    let pularLinha = document.createElement ("br") 
    textData.innerHTML = Input_campoData.value
    textData.classList.add ("teste")
    Data.appendChild (pularLinha)
    Data.appendChild (textData)

    let texTipo = document.createElement ("p")
    texTipo.innerHTML = Input_campoTipo.value
    Tipo.appendChild (texTipo)

    let textDescrição = document.createElement ("p")
    textDescrição.innerHTML = Input_campoDescricao.value
    Descricao.appendChild (textDescrição)

    let textValor = document.createElement ("p")
    textValor.innerHTML = Input_campoValor.value
    Valor.appendChild (textValor)
}

butoon_adicionar.addEventListener ("click",colocarExtrato)


/*dados do localStorage*/

localStorage.setItem ("Data", "campoData")
console.log(Data); 

localStorage.clear




/*Saudação ao usario*/
let emojis = ['🙃','🤠','😀','😃','😄','😁','🙂','🙃','😊','😙','😜','🤪','😝','🤗'];
let campoDeSaudacao = document.getElementById('campoDeSaudacao')
let posicao
let cariha
function saudacoesUsuario(){
  let saudacoes = ['Olá!','Bem-Vindo!','Hi!','Hellou!','Oi!','Ei!']
  posicao = Math.floor(Math.random() * 5)
  carinha = Math.floor(Math.random() * 13)
  campoDeSaudacao.innerHTML= saudacoes[posicao]+' '+emojis[carinha]+' ';
}
