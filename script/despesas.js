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
function enviarEmail(){
  Email.send({
    Host:"smtp.elasticemail.com",
    Username:"cashgrap@gmail.com",
    Password:"FB6AA04E07E13FA408FD3D05B43D7E767753",
    To:'vitorhugoemail@gmail.com ',
    From:"cashgrap@gmail.com",
    Subject: "Ola Vitor, Bem vindo ao Cash grab",
    Body: "Ola, Vamos começar nossa nova jornada",
  }).then(message => console.log(message));
}
/*Função para modificar a barra de progresso*/
//arrumar um bug aqui
function limiteUser(){
    if(somaDividas.value!= ' ' & limiteProposto.value!=''){
      porcetagemDivida= (somaDividas.value*1)/limiteProposto.value; 
      porcetagemDivida = Math.round(porcetagemDivida*100);
      barraProgesso.style.width=porcetagemDivida+'%';
      barraProgesso.innerHTML=porcetagemDivida+'%';
      if(porcetagemDivida>=60 && porcetagemDivida<100){
        barraProgesso.style.background='#dede22';
      }else if(porcetagemDivida<=50){
        barraProgesso.style.background='green';
      }else if(porcetagemDivida>=100){
        barraProgesso.style.background='red'
      }
   // }
   // else{
   //    window.alert('Campo vazio');
   }
      
}
function colocarLimite(){
    valorLimiteEl.value=limiteProposto.value;
    valorLimiteEl.innerHTML= 'R$ '+limiteProposto.value;
    limiteUser()      
}
let cont=0
let vetor = [];
let i=0
function somaDivida(){
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
      console.log(cont)
      console.log(vetor)
     somaDividas.innerHTML=somaDivida();
     somaDividas.value=somaDivida();
     limiteUser()
  
}
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