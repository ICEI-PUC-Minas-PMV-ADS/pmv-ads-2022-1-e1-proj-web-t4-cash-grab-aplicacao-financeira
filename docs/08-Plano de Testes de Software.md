# Plano de Testes de Software
| **Caso de Teste 1**  |   Criação de um controlador de gastos |
| ------------------- | ------------------- |
| **Requisitos Associados** |  O sistema deve permitir a criação de um controlador de gastos, com limites pré-estabelecido pelo usuário.   |
| **Objetivo do Teste**  | Verificar se os dados estão sendo colocado de maneira correta.  |
| **Caso de sucesso**  | Ao clicar no botão de adiconar todos os dados digitados deve aparecer na tela. |
| **Caso de insucesso**| Usuario tenta adcionar um campo vazio e mostra uma mensagem de erro|

| **Caso de Teste 2**  | Envio de notificação alertando sobre o limite   |
| ------------------- | ------------------- |
| **Requisitos Associados** |  Conter uma função que mande notificação alertando quando estiver perto de estourar o limite separado para gastos  |
| **Objetivo do Teste**  | Verificar se os email estão sendo enviados de maneira correta.  |
| **Caso de sucesso**  | Alerta enviado quando o usuario chegue ao limite ou caso o usuario chegue a 60% do limite. |
| **Caso de insucesso**| Email não enviado por estar invalido|

|**Caso de teste 3**| Possibilidade de visualização das despesas atuais e futuras|
| ------------------- | ------------------- |
|**Requisitos Associados**| Conter uma função que possibilite ao usuario visualizar o seu total de dividas do mês. |
|**Objetivo do Teste**| Verificar se o somatorio das dividas do mês e futuras, está aparecendo corretamente. |
|**Caso de sucesso**| Somatorio das dividas aparecendo de forma correta. |
|**Caso de insucesso**| Dividas aparecendo zerada. | 

| **Caso de Teste 4**  | Mostra Grafico em formato de pizza   |
| ------------------- | ------------------- |
| **Requisitos Associados** |  O sistema deve exibir as despesas em formato de gráficos.  |
| **Objetivo do Teste**  | Verificar se o grafico mostra de maneira correta os valores adcionados pelo usuario  |
| **Caso de sucesso**  | Grafico mostrado em varias cores com o seus respectivos valores|
| **Caso de Insucesso** | Se o usuario não tiver nenhum dado cadastrado o grafico fico de uma única cor|





## Plano de Testes Extrato
| **Caso de Teste 1**  | Vizualizar despesas futuras através do campo Data  |
| ------------------- | ------------------- |
| **Requisitos Associados** |  O sistema deve exibir as datas das compras do usuário.  |
| **Objetivo do Teste**  | Verificar se o os campos então sendo vizualizados e adcionados pelo usuário.  |
| **Caso de sucesso**  | As datas são inceridas e vizualizadas pelo usuário na tela.|
| **Caso de Insucesso** | Se o usuario não tiver incluido a data corretamente não poderá vizualizar e seguir para o próximo preenchimento.|

| **Caso de Teste 2**  | Seleção do tipo de compra   |
| ------------------- | ------------------- |
| **Requisitos Associados** |  O sistema deverá exibir o tipo da compras do usuário.  |
| **Objetivo do Teste**  | Possibilidade do usuário selecionar e vizualizar o tipo de compra realizada.  |
| **Caso de sucesso**  | O usuário poderá escolher o tipo de compra que mais se assemelha com o produto comprado.|
| **Caso de Insucesso** | Caso o usuário não selecione o tipo do porduto comprado não será possivel a vizualização e armazenamento de seus dados, ficado totalmente limpo e impossibilidado de seguir para o proximo bloco.|

| **Caso de Teste 3**  | Possibilidade de inserir descrições   |
| ------------------- | ------------------- |
| **Requisitos Associados** |  O sistema deve possibilitar ao usuário inserir sua descrições.  |
| **Objetivo do Teste**  | Possibilidade do usuário inserir e vizualizar o tipo de compra realizada.  |
| **Caso de sucesso**  | O usuário poderá inserir sua descrição conforme o produto comprado.|
| **Caso de Insucesso** | Caso o usuário não preecha o campo de digitação os dados não poderam ser vizualizados e armazenados, ficado o campo totalmente limpo.|

| **Caso de Teste 4**  | Soma de todos os valores   |
| ------------------- | ------------------- |
| **Requisitos Associados** |  O sistema deve possibilitar ao usuário inserir seus valores.  |
| **Objetivo do Teste**  | Possibilidade do usuário inserir e vizualizar a auto soma das compras realizadas.  |
| **Caso de sucesso**  | O usuário poderá inserir seus valores em formato numeral conforme o produto comprado.|
| **Caso de Insucesso** | Caso o usuário não inclua o valor em numeral a soma não poderá ser realizada.|

| **Caso de Teste 5**  | Inclusão de todas as informações   |
| ------------------- | ------------------- |
| **Requisitos Associados** |  O sistema deve possibilitar ao usuário inserir todas as suas informações.  |
| **Objetivo do Teste**  | Possibilidade do usuário inserir e vizualizar todas as informações relacionadas a suas despesas.  |
| **Caso de sucesso**  | O usuário poderá inserir todas as informações referente a seus gastos.|
| **Caso de Insucesso** | Caso o usuário não ensira todas as informações os dados não poderam ser vizualizados.|



### Plano de Testes Simulações
| **Caso de Teste 1** | Simulação dos empréstimos |
| -------------------- | -----------------------|
| **Requisitos Associados** | O sistema deve calcular os valores e parcelas de empréstimos de acordo com os dados inseridos pelo usuário. |
| **Objetivo do teste** | Calcular corretamente contendo juros e as parcelas solicitadas. |
| **Caso de sucesso** | Cálculo das parcelas e valores aparecendo de forma correta. |
| **Caso de insucesso** | Caso não insira nenhum valor de parcela ou de empréstimo e aperte 'ok' o sistema mostra a mensagem 'NaN' no retorno. |

| **Caso de Teste 2** | Simulação dos investimentos |
| -------------------- | -----------------------|
| **Requisitos Associados** | O sistema deve calcular os valores dos aportes iniciais e mensais dos investimentos de acordo com a opção selecionada pelo usuário. |
| **Objetivo do teste** | Calcular corretamente os valores de acordo com a opção de investimento selecionada. |
| **Caso de sucesso** | Cálculo dos aportes iniciais e mensais aparecendo de forma correta. |
| **Caso de insucesso** | Caso o usuário não indique o aporte incial ou mensal como '0' quando não há o retorno total fica como inválido 'NaN'. |