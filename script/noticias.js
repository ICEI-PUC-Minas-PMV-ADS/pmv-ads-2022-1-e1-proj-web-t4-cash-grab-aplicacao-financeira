let emojis = ['🙃','🤠','😀','😃','😄','😁','🙂','🙃','😊','😙','😜','🤪','😝','🤗'];
let campoDeSaudacao = document.getElementById('campoDeSaudacao')
let campoNameUser = document.getElementById('campoNameUser')
let posicao
let cariha
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
function saudacoesUsuario(){
  campoNameUser.innerHTML= ', '+usuarioLogado.validaNome;
  let saudacoes = ['Olá','Bem-Vindo','Hi','Hellou','Oi','Ei']
  posicao = Math.floor(Math.random() * 5)
  carinha = Math.floor(Math.random() * 13)
  campoDeSaudacao.innerHTML= saudacoes[posicao]+' '+emojis[carinha]+' ';
}