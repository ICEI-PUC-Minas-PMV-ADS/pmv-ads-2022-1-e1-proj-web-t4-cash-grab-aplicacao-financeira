/*Definição das varias de escopo global*/
let limiteProposto = document.getElementById('limiteproposto');
let btnAdcionarLimite = document.getElementById('adiconarLimite');
let barraProgesso = document.getElementById('visualizador');
let gastoInput=document.getElementById('gastos');
let somaDividas= document.getElementById('somaDividas');
let btncolocarDividas=document.getElementById('colocarDividas')
let porcetagemDivida;
let valorLimiteEl = document.getElementById('valorLimite');

/*Função para modificar a barra de progresso*/
function limiteUser(){
    
    if(valorLimiteEl.value>=somaDividas.value){
        barraProgesso.style.width="100%";
        barraProgesso.style.background='red'
        barraProgesso.innerHTML='100%';
    }
    else{
      porcetagemDivida= (gastoInput.value*1)/limiteProposto.value; 
      porcetagemDivida = Math.round(porcetagemDivida*100);
      barraProgesso.style.width=porcetagemDivida+'%';
      barraProgesso.innerHTML=porcetagemDivida+'%';
      if(porcetagemDivida==60){
        barraProgesso.style.background='#dede22';
      }else if(porcetagemDivida<=50){
        barraProgesso.style.background='green';
      }
    }
}
function colocarLimite(){
    valorLimiteEl.value=limiteProposto.value;
    valorLimiteEl.innerHTML= limiteProposto.value;
    limiteUser()       
}
function colocarDividas(){
    somaDividas.value=gastoInput.value
    somaDividas.innerHTML=gastoInput.value
    limiteUser()
    
}
/*Chamando a função atraves do click no botão*/
btnAdcionarLimite.addEventListener('click',colocarLimite);
btncolocarDividas.addEventListener('click',colocarDividas);