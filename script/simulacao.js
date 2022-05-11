/*calculo do emprestimo*/
var valor = "";
var meses = "";

function capturar() {
    valor = document.getElementById("valorEmprestimo").value;
    meses = document.getElementById("mesesEmprestimo").value;
    juros = 2/100;
    document.getElementById("parcelas").innerHTML = (valor*Math.pow((1+juros),meses)/meses).toFixed(2);
    document.getElementById("montante").innerHTML = (valor*Math.pow((1+juros),meses)).toFixed(2);
}