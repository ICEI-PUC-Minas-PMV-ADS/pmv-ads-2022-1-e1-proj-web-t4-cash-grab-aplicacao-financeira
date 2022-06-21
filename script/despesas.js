/*Definição das varias de escopo global*/
let limiteProposto = document.getElementById('limiteproposto');
let barraProgesso = document.getElementById('visualizador');
let gastoInput=document.getElementById('gastos');
let somaDividas= document.getElementById('somaDividas');
let valorLimiteEl = document.getElementById('valorLimite');
let btncolocarDividas=document.getElementById('colocarDividas');
let btnAdcionarLimite = document.getElementById('adiconarLimite');
let btnAddDespesas = document.getElementById('btnAddDespesas');
let btnEditar = document.getElementById('btnEditar')
let porcetagemDivida;


/*Recuperando dados do localStorage*/
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
let dividasUser = JSON.parse(localStorage.getItem(usuarioLogado.validaNome))


/*Função que envia email com alerta do limite*/
function enviarEmail(e){
    if(e>=60 && e<100){
      let params ={
        assunto:'Gastos passaram de 50%...'+'👀',
        from_name:usuarioLogado.validaNome,
        email_id: usuarioLogado.validaEmail,
        message: 'Verificamos que seu seus gastos já utrapassaram 50% do que foi proposto por você. Recomendamos que verifique os gastos'
      }
      emailjs.send('service_lg7h273','template_6q503gl',params).then(function(res){
        console.log('Enviado'+res.status)
      })
    }
  else if(e>=100){
    let params ={
      assunto:'Limite estourado...'+'😬',
      from_name:usuarioLogado.validaNome,
      email_id: usuarioLogado.validaEmail,
      message:'Nosso sistema verificou que seus gastos passaram do limite estipulador por vc. Por favor revise seus limites'
    }
    emailjs.send('service_lg7h273','template_6q503gl',params).then(function(res){
      console.log('Enviado'+res.status)
    })
    }
}
/*Função para modificar a barra de progresso*/
let limitee = JSON.parse(localStorage.getItem(usuarioLogado.validaNome+'limite'));
function limiteUser(){
    if(limitee[0].limite!=undefined && somaDividas.value!=undefined ){
      porcetagemDivida= (somaDividas.value*1)/parseFloat(limitee[0].limite,10); 
      porcetagemDivida = Math.round(porcetagemDivida*100);
      barraProgesso.style.width=porcetagemDivida+'%';
      barraProgesso.innerHTML=porcetagemDivida+'%';
      if(porcetagemDivida>=60 && porcetagemDivida<100){
        barraProgesso.style.background='#D4CD08';
        enviarEmail(porcetagemDivida)
      }else if(porcetagemDivida<=50){
        barraProgesso.style.background='#11BD2E';
      }else if(porcetagemDivida>=100){
        barraProgesso.style.background='#C71F16'
        enviarEmail(porcetagemDivida)
      }
   }else{
     console.log(porcetagemDivida)
   }
      
}
/*Funções para colocar limite e fazer calculo das dividas*/
let cont=0
let vetor = [];
let i=0

let limite = JSON.parse(localStorage.getItem(usuarioLogado.validaNome+'limite'));
let recuperandoDivida = document.getElementById('atual');


function mostrarLimite(){
  valorLimiteEl.innerHTML= 'R$ '+limite[0].limite;
  console.log(recuperandoDivida.value)
  somaDividas.innerHTML='R$ '+recuperandoDivida.value
  limiteUser()
}

function colocarLimite(){
  localStorage.removeItem(usuarioLogado.validaNome+'limite') 
  let limite = JSON.parse(localStorage.getItem(usuarioLogado.validaNome+'limite'));
      if(limite == null){
          localStorage.setItem(usuarioLogado.validaNome+'limite',"[]");
          limite = [];
      }
    valorLimiteEl.value=parseFloat(limiteProposto.value.replace(',','.'));
    let limiteDefinido = {
      limite:limiteProposto.value,
    }
    limite.push(limiteDefinido);
   localStorage.setItem(usuarioLogado.validaNome+'limite', JSON.stringify(limite));
    valorLimiteEl.innerHTML= 'R$ '+limiteProposto.value;
    limiteUser()  
    location.reload(); 
  }

function somaDivida(){
  /*Função para somar as dividas*/
    let soma = 0
    for(let i in vetor) {
      soma +=vetor[i]
    }
    return soma
}
function colocarDividas(){
 // let b= parseFloat(gastoInput.value,10)
   // vetor[cont] = b
    //cont+=1
     //somaDividas.value=somaDivida();
       somaDividas.innerHTML='R$ '+atual
       limiteUser()
    
}
/*Parte onde faz o campos aparecer*/
let cancelarEditar = document.getElementById('cancelarEditar');
let cancelarDois = document.getElementById('cancelarEditardois')
function mostrarCamposDivida(){
  gastoInput.classList.toggle('ocultarElemento');
  btncolocarDividas.classList.toggle('ocultarElemento');
  cancelarDois.classList.toggle('ocultarElemento')
  btnAddDespesas.classList.toggle('ocultarElemento')
}
function mostrarCampoLimite(){
  limiteProposto.classList.toggle('ocultarElemento');
  btnAdcionarLimite.classList.toggle('ocultarElemento');
  cancelarEditar.classList.toggle('ocultarElemento');
  btnEditar.classList.toggle('ocultarElemento')
}


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

/*Criação do grafico de pizza*/
let saude=0;
let educacao = 0
let lazer =0
let outros = 0
if(dividasUser==undefined){
 saude=50;
}
else{
  for(let j in dividasUser){
   if(dividasUser[j].tipo=='saude'){
       saude+=parseFloat(dividasUser[j].valor,10)
   }
   else if(dividasUser[j].tipo=='educacao'){
       educacao+=parseFloat(dividasUser[j].valor,10)
   }
   else if(dividasUser[j].tipo=='lazer'){
     lazer+=parseFloat(dividasUser[j].valor,10)
   }
   else if(dividasUser[j].tipo=='outros'){
     outros+=parseFloat(dividasUser[j].valor,10)
   }
  }
}
const grafico = document.getElementsByClassName('line-chart')
const criacaoDoGrafico = new Chart(grafico,{
  type: 'doughnut',
  data: {
  datasets: [{
    label: 'My First Dataset',
    data: [saude,educacao,lazer,outros],
    backgroundColor: [
      '#D4CD08',//saude
      '#11BD2E',//educacao
      '#089AC7',//lazer
      '#9116D1'//Outros
    ],
    hoverOffset: 0
  }]
  }
});
/*Saudação ao usario*/
let emojis = ['🙃','🤠','😀','😃','😄','😁','🙂','🙃','😊','😙','😜','🤪','😝','🤗'];
let campoDeSaudacao = document.getElementById('campoDeSaudacao')
let campoNameUser = document.getElementById('campoNameUser')
let posicao
let cariha
function saudacoesUsuario(){
  campoNameUser.innerHTML= ', '+usuarioLogado.validaNome;
  let saudacoes = ['Olá','Bem-Vindo','Hi','Hellou','Oi','Ei']
  posicao = Math.floor(Math.random() * 5)
  carinha = Math.floor(Math.random() * 13)
  campoDeSaudacao.innerHTML= saudacoes[posicao]+' '+emojis[carinha]+' ';
}
/* função das despesas futuras*/

let atual=document.getElementById("atual");
let futuro=document.getElementById("futuro");
let date=new Date()
let dia = date.getDate();
let mes =  (date.getMonth() + 1);
if(mes<10){
   mes ='0' + (date.getMonth() + 1);
}
let ano = date.getFullYear();
let validacaoData=  String(mes) + "/"+ String(ano);
let proxima= parseFloat(mes,10)+1;
let dividames=0;
let dividaproxmes=0;
function  mostrardespesas () {
  /* mostrar a despesa atual com base no mês*/
 for (let i in dividasUser){
   let buscarmes= dividasUser[i].data[5] + dividasUser[i].data[6]
   if(buscarmes ==mes ){
      dividames+=parseFloat(dividasUser[i].valor,10)
   }
   if(buscarmes==proxima){
       dividaproxmes+=parseFloat(dividasUser[i].valor,10)
   }
   else{
     atual.innerHTML="Não a dividas pendentes!";
     futuro.innerHTML="Não a dividas pendentes!";
   }
 }
 atual.innerHTML='R$ '+dividames;
 atual.value = dividames
 somaDividas.value =dividames;
 futuro.innerHTML='R$ '+dividaproxmes;
}

/*Chamando a função atraves do click no botão*/
btnAdcionarLimite.addEventListener('click',colocarLimite);
btncolocarDividas.addEventListener('click',colocarDividas);
btnAddDespesas.addEventListener('click',mostrarCamposDivida);
btnEditar.addEventListener('click', mostrarCampoLimite);
cancelarEditar.addEventListener('click',mostrarCampoLimite)
cancelarDois.addEventListener('click',mostrarCamposDivida)