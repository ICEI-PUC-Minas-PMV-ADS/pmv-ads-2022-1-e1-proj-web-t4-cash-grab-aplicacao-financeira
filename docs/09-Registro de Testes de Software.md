# Registro de Testes de Software

## Caso de teste 01 - Realizar o cadastro do usuário

1- Caso de sucesso: Usuário cadastrado do sistema.

![TelaCadastro1](img/TesteCadastro1.png)

2- Caso de Insucesso: Mensagem de erro informando para preencher os campos.

![TelaCadastro2](img/TelaCadastro2.png)

## Caso de teste 02 - Validação do e-mail no cadastro

1- Caso de sucesso: Sistema permite prosseguir com a inserção dos dados.

![TelaCadastro3](img/TelaCadastro3.png)

2- Caso de Insucesso: Mensagem de erro informando que o e-mail inserido é inválido.

![TelaCadastro4](img/TesteCadastro4.png)

## Caso de teste 01 - Realizar o login

1- Caso de sucesso: Login permitirá acessar o sistema.

![TelaLogin1](img/TesteLogin1.png)

2- Caso de Insucesso: Mensagem de erro informando que o usuário não está cadastrado.

![TelaLogin2](img/TesteLogin2.png)

## Caso de teste 02 - Preenchimento dos campos

1- Caso de sucesso: Sistema permitirá realizar o login.

![TelaLogin3](img/TesteLogin3.png)

2- Caso de Insucesso: Mensagem de erro informando para o usuário preencher os campos.

![TelaLogin4](img/TesteLogin4.png)

## Caso de teste 03 - Validação do e-mail do login

1- Caso de sucesso: Sistema não apresentará mensagem de erro.

![TelaLogin5](img/TesteLogin5.png)

2- Caso de Insucesso: Mensagem de erro informando que o e-mail é inválido.

![TelaLogin6](img/TesteLogin6.png)

## Caso de teste 01 - Criação de um controlador de gastos

1- Caso de sucesso: Dados aparecem na tela.

![Tela 7](img/caso_de_sucesso_telaDeDespesas.png)

2- Caso de Insucesso: Mensagem de erro com o campo vazio.

![Tela 8](img/caso_de_insucesso_tela_de_despesas.png)

## Caso de teste 02 - Envio de alerta por email

1- Caso de sucesso: Email enviado caso o usuario ultrapasse 60% do valo estipulado

![Tela 9](img/caso_sucesso_email_enviado.png)

2- Caso de Insucesso: Email não enviado por está invalido.

![Tela 8](img/caso_de_insucesso_email%20.png)

## Caso de teste 03- Possibilidade da visualização de despesas atuais e futuras

1- Caso de sucesso: Somatorio das dividas Aparecendo corretamente.

![tela 7](img/caso%20sucesso%20teste03.png)

2- Caso de insucesso: Valor das Dividas aparecendo zerado.

![tela 7](img/caso%20insucesso%20teste%2003.png) 

## Caso de teste 04 - Mostra Grafico em formato de pizza 

1- Caso de Sucesso: Grafico apresenta as cores e seus respectivos valores

![Tela 8](img/caso_de_sucesso_grafico.png)

2 - Caso de insucesso:  Grafico de uma única cor

![Tela 9](img/caso%20de%20insucesso%20grafico.png)




## Caso de teste 01 - Vizualização das datas de compra

1- Caso de sucesso: As datas inceridas pelo usuário aparecem na tela.

![Tela Data](img/caso_de_sucesso_telaDeExtrato.jpg)

2 - Caso de insucesso:  Caso o usuário não preencha a data de sua compra o envio para o localStorage não poderá ser relizado.

![Tela Data](img/caso_de_insucesso_telaDeData.jpg)

## Caso de teste 02 - Vizualizar o tipo de compra

1- Caso de sucesso: O usuário poderá escolher o tipo de compra que mais se assemelha com o produto comprado.

![Tela Tipo](img/funcionalidade.tipo.jpg)

2 - Caso de insucesso:  Caso o usuário não selecione o tipo do porduto comprado não será possivel a vizualização e armazenamento de seus dados, ficado totalmente e impossibilidado de seguir para o proximo bloco. 

![Tela Tipo](img/caso_de_insucesso_telaDeTipo.jpg)

## Caso de teste 03 - Vizualização e inclusão das descrições

1- Caso de sucesso: O usuário poderá declarar as descrições da suas compras conforme imagem abaixo.

![Tela decrição](img/caso_de_sucesso_telaDeDescri%C3%A7%C3%A3o.jpg)

2 - Caso de insucesso:  Caso o usuário não preecha o campo de digitação os dados não poderam ser vizualizados e armazenados, ficado o campo totalmente limpo. 

![Tela descrição](img/funcionalidade.descri%C3%A7%C3%A3o.jpg)

## Caso de teste 04 - Soma dos valores inceridos

1- Caso de sucesso: Após a inclusão dos valores gastos pelo Usuário temos uma auto soma dos valores.

![Tela valor](img/caso_de_sucesso_telaDeValor.jpg)

2 - Caso de insucesso:  Caso o usuário não inclua o valor em numeral a soma não poderá ser realizada.

![Tela valor](img/caso_de_insucesso_telaDeValor.jpg)

## Caso de teste 05 - Inclusão de todas informações

1- Caso de sucesso: Após a inclusão de todas as informações o usuário poderá vizualizar seus dados quando quiser e de onde quiser.

![Tela Completa](img/funcionalidade.incuir.jpg)

2- Caso de insucesso: Caso o usuário não ensira todas as informações os dados não poderam ser vizualizados.

![Tela Completa](img/tela.extratos.jpg)

## Caso de Teste 1 - Simulação de empréstimo

1- Caso de sucesso: Cálculo das parcelas e valores aparecendo de forma correta.

![Tela Emprestimo](img/simul1.png)

2- Caso de insucesso: Caso não insira nenhum valor de parcela ou de empréstimo e aperte 'ok' o sistema mostra a mensagem 'NaN' no retorno.

![Tela Emprestimo](img/RegistroSimul.png)

## Caso de Teste 2 - Simulação de Investimento

1- Caso de Sucesso: Cálculo dos aportes iniciais e mensais aparecendo de forma correta.

![Tela de Investimento](img/simul2.png)

2- Caso de Insucesso: Caso o usuário não indique o aporte incial ou mensal como '0' quando não há o retorno total fica como inválido 'NaN'.

![Tela de Invesyimento](img/Registro1Simul.png)