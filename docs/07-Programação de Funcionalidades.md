# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

## Tela de cadastro de usuário
Nesta tela o usuário podera realizar o seu cadastro para acessar o sistema.

![Cadastro](img/Cadastro_template.png)

### Funcionalidade cadastro
Essa funcionalidade irá captar os dados inseridos pelo usuário como nome, e-mail e senha, para incluir no localstorage e assim podemos ter o controle de qual usuário está acessando no sistema.

![CodigoCadastro](img/C%C3%B3digo_Cadastro.png)


## Tela de despesas (RF-01)
Na tela de despesas o usuario do site poderar ver sua vida finaceira de forma mais ampla. Nessa tela fica seus limites, suas despesas, suas fontes de renda.

![Template](img/template.png)

### Funcionalidade RF-01
Essa funcionalidade permite que o usuario crie um controle de gastos com o limite pré estabelecido pelo mesmo, e quando vai acresentando novas dividas a barra de status mostra a situação como está. Uma ilustração da funionalidade na imagem abaixo

![RF-01](img/RF-01.png)

### Despesas em formato de grafico (RF-02)
Nessa funcionalidade o usuario consigará ter uma grande noção de onde seu dinheiro esta sendo aplicao

![RF-02](img/rf-02.png)

### Notificação do usuario (RF-03)
Implementação da funcionalidade de notificação ao usaurio sobre o seus gasto. Abaixo uma imagem do algoritimo implementado.
![RF-03](img/rf-03.png)

## Tela de Simulacoes (RF-05) e (RF-07)
    A tela de simulações permitirá ao usuário acessar e simular juros de empréstimos e rendimentos de investimentos a sua escolha.

![Simulacoes](img/Simula%C3%A7%C3%B5es%20Intt..png)  

### Funcionalidade (RF-05)
    Essa funcionalidade concederá ao usuário uma simulação de empréstimo, calculando juros ao mês, e lhe informando o valor de cada parcela referente a sua solicitação nos campos de preenchimento como mostra a imagem a seguir.

 ![RF-05](img/simulacoes%20func..png)   

### Tela de Extrato
    Com a tela de extratos o usuario terá todas as informações sobre o movimento dos seus gastos, terá a possibilidade de vizualizar e incluir sua lista de despesas conforme imagem abaixo.

 ![EXTRATO](img/tela.extratos.jpg)

### Funcionalidades do Extrato
## Data
    Essa funcionalidade possibilita ao usuário incluir as datas das suas compras para um controle pessoal dinâmico. 

![Funcionalide 01](img/funcionalidade.data.jpg)
