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