/*calculo do emprestimo*/

function capturar() {
    valor = document.getElementById("valorEmprestimo").value;
    meses = document.getElementById("mesesEmprestimo").value;
    juros = 1/100;
    var valor = parseFloat(valor.replace(',', '.'));

    /*alerts emprestimo*/
    if(document.getElementById("valorEmprestimo").value == ''){
      alert('Por favor, preencha o campo valor do empréstimo.');
      document.getElementById("valorEmprestimo").focus();
      return false
      }
      if(document.getElementById("mesesEmprestimo").value == 0){
        alert('Por favor, preencha o campo tempo do empréstimo.');
        document.getElementById("mesesEmprestimo").focus();
        return false
        }

    document.getElementById("parcelas").innerHTML = (valor*Math.pow((1+juros),meses)/meses).toFixed(2);
    document.getElementById("jurosemp").innerHTML = (valor*Math.pow((1+juros),meses)-(valor)).toFixed(2);
    document.getElementById("montante").innerHTML = (valor*Math.pow((1+juros),meses)).toFixed(2);
}

/*calculo do investimento*/

 function captura() {
    valorinv = document.getElementById("valorInvestimento").value;
    mesesinv = document.getElementById("mesesInvestimento").value;
    aporte = document.getElementById("aporteMes").value;
    var valorinv = parseFloat(valorinv.replace(',', '.'));
    var aporte = parseFloat(aporte.replace(',', '.'));
    var select = document.getElementById("investimentos");
    jurosinv = (select.options[select.selectedIndex].value)/100;

    /*alerts investimentos*/
    if(document.getElementById("valorInvestimento").value == ''){
      alert('Por favor, preencha o campo valor do investimento, se não houver informe 0.');
      document.getElementById("valorInvestimento").focus();
      return false
      }
      if(document.getElementById("aporteMes").value == ''){
        alert('Por favor, preencha o campo aporte mensal, se não houver informe 0.');
        document.getElementById("aporteMes").focus();
        return false
        }
        if(document.getElementById("mesesInvestimento").value == 0){
          alert('Por favor, preencha o campo tempo de investimento.');
          document.getElementById("mesesInvestimento").focus();
          return false
          }
    
    var retornoInicial = document.getElementById("retornoInicial").innerHTML = (valorinv*Math.pow((1+jurosinv),mesesinv)).toFixed(2);
    var retornoMensal = document.getElementById("retornoMensal").innerHTML = ((aporte*(Math.pow(1+jurosinv,mesesinv)-1))/jurosinv).toFixed(2);
    var retornoTotal =  (parseFloat(retornoInicial) + parseFloat(retornoMensal));
    document.getElementById("retornoTotal").innerHTML = parseFloat(retornoTotal.toFixed(2));
  }  

/*Recuperando dados do localStorage*/
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

/*Saudação ao usario*/
let emojis = ['🙃','🤠','😀','😃','😄','😁','🙂','🙃','😊','😙','😜','🤪','😝','🤗'];
let campoDeSaudacao = document.getElementById('campoDeSaudacao')
let posicao
let cariha
function saudacoesUsuario(){
  campoNameUser.innerHTML= ', '+usuarioLogado.validaNome;
  let saudacoes = ['Olá!','Bem-Vindo!','Hi!','Hellou!','Oi!','Ei!']
  posicao = Math.floor(Math.random() * 5)
  carinha = Math.floor(Math.random() * 13)
  campoDeSaudacao.innerHTML= saudacoes[posicao]+' '+emojis[carinha]+' ';
}
/*Parte onde faz o menu no celular aparecer*/
let menuCell = document.getElementsByClassName('imgMenuCell');

function aparecerMenu(){
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
