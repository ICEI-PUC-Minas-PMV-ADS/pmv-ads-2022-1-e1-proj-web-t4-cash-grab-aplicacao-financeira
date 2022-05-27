//Definindo variavel 
//Let nome da variavel = document.getElementById (nome do Id)
    let Input_campoDescricao = document.getElementById ("campoDescricao") 
    let butoon_adicionar = document.getElementById ("adicionar")
    let descricao = document.getElementById ("Descrição")

    let Input_campoData = document.getElementById ("campoData")
    let Data = document.getElementById ("data")


function colocarExtrato( ) { 
    let textDescricao = document.createElement ("p") //variavel para criacao de elemento
    textDescricao.innerHTML = Input_campoDescricao.value
    descricao.appendChild (textDescricao)
    console.log("entrei")

    let textData = document.createElement ("p")
    textData.innerHTML = Input_campoData.value
    Data.appendChild (textData)
    console.log("estouaquiagora")

}


butoon_adicionar.addEventListener ("click",colocarExtrato)

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
