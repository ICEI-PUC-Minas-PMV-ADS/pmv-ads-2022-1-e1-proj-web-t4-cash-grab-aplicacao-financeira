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
var valorinv = "";
var mesesinv = "";
var aporte = "";

function captura() {
    valorinv = document.getElementById("valorInvestimento").value;
    mesesinv = document.getElementById("mesesInvestimento").value;
    aporte = document.getElementById("aporteMes").value;
    jurosinv = 1/100;
    document.getElementById("retornoInicial").innerHTML = (valorinv*Math.pow((1+jurosinv),mesesinv)).toFixed(2);
    document.getElementById("retornoMensal").innerHTML = ((aporte*(Math.pow(1+jurosinv,mesesinv)-1))/jurosinv).toFixed(2);
    document.getElementById("retornoTotal").innerHTML = .toFixed(2);
}
