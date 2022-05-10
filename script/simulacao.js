/*variaveis do emprestimo*/
function calculaJuros(){
var capital = $("valorEmprestimo").val();
var taxaJuros = val(2);
var tempoAplicacao = $("mesesEmprestimo").val(); 
var taxaJuros = taxaJuros/100;
}
var montante = capital * Math.pow((1 + taxaJuros), tempoAplicacao);
var tot = montante.toString();
var men = tot/tempoAplicacao;

$('#total').val(tot);
$('#mensal').val(men);