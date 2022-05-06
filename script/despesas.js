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

/*Função para modificar a barra de progresso*/
function limiteUser(){
    if(gastoInput.value!= ' ' & limiteProposto.value!=''){
      porcetagemDivida= (gastoInput.value*1)/limiteProposto.value; 
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
    }
    else{
      window.alert('Campo vazio');
    }
      
}
function colocarLimite(){
    valorLimiteEl.value=limiteProposto.value;
    valorLimiteEl.innerHTML= 'R$'+limiteProposto.value;
    limiteUser()      
   
}
function colocarDividas(){
    somaDividas.value=gastoInput.value
    somaDividas.innerHTML='R$'+gastoInput.value
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
}
/*Chamando a função atraves do click no botão*/
btnAdcionarLimite.addEventListener('click',colocarLimite);
btncolocarDividas.addEventListener('click',colocarDividas);
btnAddDespesas.addEventListener('click',mostrar);
btnEditar.addEventListener('click', mostrarCampoLimite);