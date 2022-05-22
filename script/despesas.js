/*Definição das varias de escopo global*/
let limiteProposto = document.getElementById('limiteproposto');
let barraProgesso = document.getElementById('visualizador');
let gastoInput=document.getElementById('gastos');
let somaDividas= document.getElementById('somaDividas');
let valorLimiteEl = document.getElementById('valorLimite');
let btncolocarDividas=document.getElementById('colocarDividas');
let btnAdcionarLimite = document.getElementById('adiconarLimite');
let btnAddDespesas = document.getElementById('btnAddDespesas');
let btnEditar = document.getElementById('btnEditar');
let porcetagemDivida;
let cancelarEditar = document.getElementById('cancelarEditar');
/*Função que envia email com alerta do limite*/
function enviarEmail(e){
  /*Falta nessa função integrar o nome e email do usuario logado*/
  if(e>=60 && e<100){
    Email.send({
      Host:"smtp.elasticemail.com",
      Username:"cashgrap@gmail.com",
      Password:"FB6AA04E07E13FA408FD3D05B43D7E767753",
      To:'vitorhugoemail@gmail.com ',
      From:"cashgrap@gmail.com",
      Subject: "Alerta.... Limite",
      Body: "Olá, Vimos aquie seus gastos estão a "+e+"% do valor estibulado por você.",
    }).then(message => console.log(message));
  }else if(e>=100){
    Email.send({
      Host:"smtp.elasticemail.com",
      Username:"cashgrap@gmail.com",
      Password:"FB6AA04E07E13FA408FD3D05B43D7E767753",
      To:'vitorhugoemail@gmail.com ',
      From:"cashgrap@gmail.com",
      Subject: "Limite estourado",
      Body: "Ops, verificamos aqui seu gasto utrapassaram o seu limite",
    }).then(message => console.log(message));
  }
}
/*Função para modificar a barra de progresso*/

function limiteUser(){
    if(somaDividas.value!=undefined & limiteProposto.value!=''){
      porcetagemDivida= (somaDividas.value*1)/limiteProposto.value; 
      porcetagemDivida = Math.round(porcetagemDivida*100);
      barraProgesso.style.width=porcetagemDivida+'%';
      barraProgesso.innerHTML=porcetagemDivida+'%';
      if(porcetagemDivida>=60 && porcetagemDivida<100){
        barraProgesso.style.background='#dede22';
        enviarEmail(porcetagemDivida)
      }else if(porcetagemDivida<=50){
        barraProgesso.style.background='green';
      }else if(porcetagemDivida>=100){
        barraProgesso.style.background='red'
        enviarEmail(porcetagemDivida)
      }
   }
      
}
/*Funções para colocar limite e fazer calculo das dividas*/
let cont=0
let vetor = [];
let i=0
function colocarLimite(){
    /*Colocar o limite do usario na tela*/
    valorLimiteEl.value=limiteProposto.value;
    valorLimiteEl.innerHTML= 'R$ '+limiteProposto.value;
    limiteUser()      
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
    let b= parseFloat(gastoInput.value,10)
      vetor[cont] = b
      cont+=1
     somaDividas.innerHTML='R$ '+somaDivida();
     somaDividas.value=somaDivida();
     limiteUser()
  
}
/*Parte onde faz o campos aparecer*/
function mostrar(){
  gastoInput.classList.toggle('ocultarElemento');
  btncolocarDividas.classList.toggle('ocultarElemento');
  //btnAddDespesas.classList.toggle('colcarFechamento');
}
function mostrarCampoLimite(){
  limiteProposto.classList.toggle('ocultarElemento');
  btnAdcionarLimite.classList.toggle('ocultarElemento');
  cancelarEditar.classList.toggle('ocultarElemento');
}
/*Chamando a função atraves do click no botão*/
btnAdcionarLimite.addEventListener('click',colocarLimite);
btncolocarDividas.addEventListener('click',colocarDividas);
btnAddDespesas.addEventListener('click',mostrar);
btnEditar.addEventListener('click', mostrarCampoLimite);

/*Parte onde faz o menu no celular aparecer*/
let menuCell = document.getElementsByClassName('imgMenuCell');

function aparecerMenu(){
  console.log('oi')
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
const grafico = document.getElementsByClassName('line-chart')
const criacaoDoGrafico = new Chart(grafico,{
  type: 'doughnut',
  data: {
 
  datasets: [{
    label: 'My First Dataset',
    data: [50, 50, 50],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 1
  }]
  }
});

