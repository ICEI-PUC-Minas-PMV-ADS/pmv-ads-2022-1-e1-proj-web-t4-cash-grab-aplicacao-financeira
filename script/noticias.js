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
/*Paarte onde faz as noticias dinamica*/
let noticiasInvestimento = [
  {
    titulo: 'Os 3 tipos de investimentos financeiros mais seguros',
    link:'https://riconnect.rico.com.vc/blog/tipos-de-investimentos?campaignid=316171546&adgroupid=55392294370&feeditemid=&targetid=aud-949262104314:dsa-19959388920&loc_interest_ms=&loc_physical_ms=1001566&matchtype=&network=g&device=c&devicemodel=&ifmobile=&ifmobile=0&ifsearch=1&ifsearch=&ifcontent=0&ifcontent=&creative=298673772136&keyword=&placement=&target=&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=GGLE_PESQ_DSA&hsa_tgt=aud-949262104314:dsa-19959388920&hsa_net=adwords&hsa_kw=&hsa_grp=55392294370&hsa_acc=7134496929&hsa_ver=3&hsa_ad=298673772136&hsa_cam=316171546&hsa_mt=&hsa_src=g&gclid=CjwKCAjwtcCVBhA0EiwAT1fY70t_bPHJI2cBv12rOgV3cw_F_PT6if-obvpV31ARVSeMfn2byjPgUBoCONcQAvD_BwE'
  },
  {
    titulo:'Investimentos para Iniciantes: um guia com estratégias para quem quer começar',
    link:'https://conteudos.xpi.com.br/aprenda-a-investir/relatorios/investimento-para-iniciantes/'
  },
  {
    titulo:'INVESTIMENTOS PARA INICIANTES: 5 DICAS PARA UMA MAIOR RENTABILIDADE',
    link:'https://blog.orama.com.br/2018/11/21/investimentos-para-iniciantes-5-dicas-para-uma-maior-rentabilidade/?gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zrhofkd3JL2Mhfjus1CZzZ5KeOLOmvqeVsn-C8XLIrFzb-8BAQyERoCZ0AQAvD_BwE'
  }
]
 let noticiasEconomia = [
  {
    titulo: 'Economia para iniciantes: Entenda o básico',
    link:'https://noticiasconcursos.com.br/economia-para-iniciantes-entenda-o-basico/'
  },
  {
    titulo: 'COMO COMEÇAR A ESTUDAR ECONOMIA?',
    link:'https://www.iapcursosonline.com/posts/ver/34/como-comecar-a-estudar-economia'
  },
  {
    titulo: 'O que é inflação? Veja como ela afeta os seus investimentos!',
    link:'https://riconnect.rico.com.vc/blog/o-que-e-inflacao?campaignid=316171546&adgroupid=55392294370&feeditemid=&targetid=aud-437331571629:dsa-19959388920&loc_interest_ms=&loc_physical_ms=1001566&matchtype=&network=g&device=c&devicemodel=&ifmobile=&ifmobile=0&ifsearch=1&ifsearch=&ifcontent=0&ifcontent=&creative=298673772136&keyword=&placement=&target=&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=GGLE_PESQ_DSA&hsa_tgt=aud-437331571629:dsa-19959388920&hsa_net=adwords&hsa_kw=&hsa_grp=55392294370&hsa_acc=7134496929&hsa_ver=3&hsa_ad=298673772136&hsa_cam=316171546&hsa_mt=&hsa_src=g&gclid=CjwKCAjwtcCVBhA0EiwAT1fY72LitMjHCMdgc85f2sgAqlHaSs2WIB4a2Zr5zBbQksHl4HeYz_C1PhoCxaAQAvD_BwE'
  }
 ]
 let noticiasEducacao = [
  {
    titulo: 'Educação Financeira',
    link:'http://minhaseconomias.com.br/educacao-financeira'
  },
  {
    titulo: 'A importância da educação financeira infantil nas famílias do Distrito Federal',
    link:'https://www.df.senac.br/faculdade/a-importancia-da-educacao-financeira-infantil-nas-familias-do-distrito-federal/'
  },
  {
    titulo: 'Educação financeira: 5 dicas fáceis para melhorar suas finanças',
    link:'https://www.suno.com.br/guias/educacao-financeira/'
  }
 ]
 let primeiraNoticia = document.getElementById('primeiraNoticia')
let noticiaSelecionada = document.getElementById('categoria');
let noticiaUm = document.getElementById('noticiaUm')
let tituloUm = document.getElementById('tituloUm')
let tituloDois = document.getElementById('tituloDois')
let tituloTres = document.getElementById('tituloTres')
let noticiaDois = document.getElementById('noticiaDois')
let noticiaTres = document.getElementById('noticiaTres')
let linkUm = document.getElementById('linkUm')
let linkDois = document.getElementById('linkDois')
let linkTres = document.getElementById('linkTres')
function carregarNoticias(){
   if(noticiaSelecionada.value=='investimento'){
      noticiaUm.src= noticiasInvestimento[0].link;
      tituloUm.innerHTML = noticiasInvestimento[0].titulo;
      linkUm.href =  noticiasInvestimento[0].link;
      
      noticiaDois.src= noticiasInvestimento[1].link;
      tituloDois.innerHTML= noticiasInvestimento[1].titulo;
      linkDois.href =  noticiasInvestimento[1].link;
     
      noticiaTres.src= noticiasInvestimento[2].link;
      tituloTres.innerHTML= noticiasInvestimento[2].titulo;
      linkTres.href =  noticiasInvestimento[2].link;
  }
   else if(noticiaSelecionada.value=='economia'){
     noticiaUm.src= noticiasEconomia[0].link;
     tituloUm.innerHTML = noticiasEconomia[0].titulo;
     linkUm.href =  noticiasEconomia[0].link;
     
     noticiaDois.src= noticiasEconomia[1].link;
     tituloDois.innerHTML= noticiasEconomia[1].titulo;
     linkDois.href =  noticiasEconomia[1].link;
     
     noticiaTres.src= noticiasEconomia[2].link;
     tituloTres.innerHTML= noticiasEconomia[2].titulo;
     linkTres.href =  noticiasEconomia[2].link;
     console.log('09')
   }
   else if(noticiaSelecionada.value=='educacao'){
    noticiaUm.src= noticiasEducacao[0].link;
    tituloUm.innerHTML = noticiasEducacao[0].titulo;
    linkUm.href =  noticiasEducacao[0].link;
   
    noticiaDois.src= noticiasEducacao[1].link;
    tituloDois.innerHTML= noticiasEducacao[1].titulo;
    linkDois.href =  noticiasEducacao[1].link;
   
    noticiaTres.src= noticiasEducacao[2].link;
    tituloTres.innerHTML= noticiasEducacao[2].titulo;
    linkTres.href =  noticiasEducacao[2].link;
  }
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
