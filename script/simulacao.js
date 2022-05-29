/*calculo do emprestimo*/
var valor = "";
var meses = "";

function capturar() {
    valor = document.getElementById("valorEmprestimo").value;
    meses = document.getElementById("mesesEmprestimo").value;
    juros = 1/100;
    document.getElementById("parcelas").innerHTML = (valor*Math.pow((1+juros),meses)/meses).toFixed(2);
    document.getElementById("jurosemp").innerHTML = (valor*Math.pow((1+juros),meses)-(valor)).toFixed(2);
    document.getElementById("montante").innerHTML = (valor*Math.pow((1+juros),meses)).toFixed(2);
}

/*calculo do investimento*/
/*consertar retorno total*/
/*consertar selecoes de inv*/
var valorinv = "";
var mesesinv = "";
var aporte = "";

 function captura() {
    valorinv = document.getElementById("valorInvestimento").value;
    mesesinv = document.getElementById("mesesInvestimento").value;
    aporte = document.getElementById("aporteMes").value;
    jurosinv = document.getele.value;

    var retornoInicial = document.getElementById("retornoInicial").innerHTML = (valorinv*Math.pow((1+jurosinv),mesesinv)).toFixed(2);
    var retornoMensal = document.getElementById("retornoMensal").innerHTML = ((aporte*(Math.pow(1+jurosinv,mesesinv)-1))/jurosinv).toFixed(2);
    document.getElementById("retornoTotal").innerHTML = Number(retornoInicial) + Number(retornoMensal).toFixed(2);
}

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
