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
      valor:parseFloat(Input_campoValor.value.replace(',','.')),
    }
    dados.push(extratos);
   localStorage.setItem(nomeUser.validaNome, JSON.stringify(dados));
   location.reload()
  }else{

}

}
let total = 0

let saldo = document.getElementById ("total")


function view(){
for(i=0;i<dados.length;i++){
let textData = document.createElement ("p") //variavel para criacao de elemento

  textData.innerHTML = dados[i].data
    textData.classList.add ("teste")
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
/*Soma dos valores*/
    for(let i in dados) {
      total+=parseFloat(dados[i].valor)
      
    }
    saldo.innerHTML = total

}
butoon_adicionar.addEventListener ("click",colocarExtrato)


  /*alert de Confirmação*/
butoon_adicionar.addEventListener ("click", function(){

let adicionar = confirm("Você tem a certeza que preencheu todos os campos corretamente?")

if(adicionar == true) 
{
  alert("E isso ai, Parabéns, dados adicionados com sucesso! \n 😁👍")
} else 
{
  alert("Ops, preencha os dados corretamentes para seguirmos!!! \n 😞👎")
}
} );

/*Parte onde faz o menu no celular aparecer*/
let menuCell = document.getElementsByClassName('imgMenuCell');

function aparecerMenu(){
  let menu = document.getElementById('teste');
  menu.classList.toggle('visibilidadeMenuCell');
  menu.classList.toggle('menu');
  let textoInicio = document.getElementById('textoInicio')
  let textoDespesas = document.getElementById('textoDespesas')
  let textoExtrato= document.getElementById('textoExtrato')
  let textoSimulacao = document.getElementById('textoSimulacao')
  let textoNoticias = document.getElementById('textoNoticias')
  let textoSobre = document.getElementById('textoSobre')
  textoInicio.classList.toggle('textoInicio');
  textoInicio.classList.toggle('textoMenucelular');
  textoDespesas.classList.toggle('textoMenucelular');
  textoDespesas.classList.toggle('textoDespesas');
  textoExtrato.classList.toggle('textoMenucelular');
  textoExtrato.classList.toggle('textoExtrato');
  textoSimulacao.classList.toggle('textoMenucelular');
  textoSimulacao.classList.toggle('textoSimulacao');
  textoNoticias.classList.toggle('textoMenucelular');
  textoNoticias.classList.toggle('textoNoticias');
  textoSobre.classList.toggle('textoMenucelular');
  textoSobre.classList.toggle('textoSobre');
}

/*Saudação ao usario*/
let emojis = ['🙃','🤠','😀','😃','😄','😁','🙂','🙃','😊','😙','😜','🤪','😝','🤗'];
let campoDeSaudacao = document.getElementById('campoDeSaudacao')
let posicao
let cariha
function saudacoesUsuario(){
campoNameUser.innerHTML= ', '+nomeUser.validaNome;
let saudacoes = ['Olá!','Bem-Vindo!','Hi!','Hellou!','Oi!','Ei!']
posicao = Math.floor(Math.random() * 5)
carinha = Math.floor(Math.random() * 13)
campoDeSaudacao.innerHTML= saudacoes[posicao]+' '+emojis[carinha]+' ';
}
