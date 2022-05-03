/*Definição das varias de escopo global*/
let limiteProposto = document.getElementById('limiteproposto');
let btnAdcionarLimite = document.getElementById('adiconarLimite');
let barraProgesso = document.getElementById('visualizador');
let porcetagemDivida;

/*Função para modificar a barra de progresso*/
function limiteUser(){
    let valorLimiteEl = document.getElementById('valorLimite');
    let gastoInput=document.getElementById('gastos');
    console.log(porcetagemDivida)
    valorLimiteEl.innerHTML= limiteProposto.value;
    if(limiteProposto.value==gastoInput.value){
        barraProgesso.style.width="100%";
        barraProgesso.style.background='red'
        barraProgesso.innerHTML='100%';
    }
    else{
      porcetagemDivida= (gastoInput.value*1)/limiteProposto.value; 
      porcetagemDivida = Math.round(porcetagemDivida*100);
      console.log(porcetagemDivida)
      barraProgesso.style.width=porcetagemDivida+'%';
      barraProgesso.innerHTML=porcetagemDivida+'%';
      if(porcetagemDivida==60){
        barraProgesso.style.background='#dede22';
      }else if(porcetagemDivida<=50){
        barraProgesso.style.background='green';
      }
    }
}

/*Chamando a função atraves do click no botão*/
btnAdcionarLimite.addEventListener('click',limiteUser);