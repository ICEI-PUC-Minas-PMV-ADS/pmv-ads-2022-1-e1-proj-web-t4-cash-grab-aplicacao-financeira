//Definindo variavel 
//Let nome da variavel = document.getElementById (nome do Id)
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
let Input_campoData = document.getElementById ("campoData") 
let butoon_adicionar = document.getElementById ("adicionar")
let Data = document.getElementById ("Data")

let Input_campoTipo = document.getElementById ("campoTipo")
let Tipo = document.getElementById ("Tipo")

let Input_campoDescricao = document.getElementById ("campoDescricao")
let Descricao = document.getElementById ("Descrição")

let Input_campoValor = document.getElementById ("campoValor")
let Valor = document.getElementById ("Valor")

let  nomeUser = JSON.parse (localStorage.getItem("usuarioLogado"));
var dados = JSON.parse(localStorage.getItem(nomeUser.validaNome));

if(dados == null){
    localStorage.setItem(nomeUser.validaNome,"[]");
    dados = [];
}

// Colocando os valores em uma variável e colocando no localstorage


function colocarExtrato( ) {
  if(Input_campoData.value !='' && Input_campoTipo.value!='' &&  Input_campoDescricao.value!='' &&  Input_campoValor.value!=''){
    let extratos = {
      data: Input_campoData.value,
      tipo: Input_campoTipo.value,
      descricao: Input_campoDescricao.value,
      valor: Input_campoValor.value,
    }
    dados.push(extratos);
   localStorage.setItem(nomeUser.validaNome, JSON.stringify(dados));
  view();
  }else{

  

}

}
function view(){
for(i=0;i<dados.length;i++){
let textData = document.createElement ("p") //variavel para criacao de elemento
let pularLinha = document.createElement ("br") 
  textData.innerHTML = dados[i].data
    textData.classList.add ("teste")
    Data.appendChild (pularLinha)
    Data.appendChild (textData)

    let texTipo = document.createElement ("p")
    texTipo.innerHTML = dados[i].tipo
    Tipo.appendChild (texTipo)

    let textDescrição = document.createElement ("p")
    textDescrição.innerHTML = dados[i].descricao
    Descricao.appendChild (textDescrição)

    let textValor = document.createElement ("p")
    textValor.innerHTML = dados[i].valor
    Valor.appendChild (textValor)
}

}
butoon_adicionar.addEventListener ("click",colocarExtrato)

//Saudação ao usario//
let emojis = ['🙃','🤠','😀','😃','😄','😁','🙂','🙃','😊','😙','😜','🤪','😝','🤗'];
let campoDeSaudacao = document.getElementById('campoDeSaudacao')
let posicao
let cariha
function saudacoesUsuario(){
campoNameUser.innerHTML= ', '+usuarioLogado.validaNome;
let saudacoes = ['Olá!','Bem-Vindo!','Hi!','Hellou!','Oi!','Ei!']
posicao = Math.floor(Math.random() * 5)
carinha = Math.floor(Math.random() * 13)
campoDeSaudacao.innerHTML= saudacoes[posicao]+' '+emojis[carinha]+' ';
}