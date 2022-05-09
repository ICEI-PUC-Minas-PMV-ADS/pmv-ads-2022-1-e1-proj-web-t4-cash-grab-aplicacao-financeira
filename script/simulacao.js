/*variaveis do emprestimo*/
var emprestimo = "";

function capturar() {
    emprestimo = document.getElementById('valorEmprestimo').value;
    document.getElementById('valorDigitado').innerHTML = emprestimo;
}