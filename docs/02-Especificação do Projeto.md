# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

**Persona 1**:

![Persona](img/Persona%201.png)

Letícia Ophelia tem 24 anos, é desenvolvedora de software e tem uma remuneração de 1 a 3 salários mínimos. Letícia usa o cartão de crédito regularmente, gastando em torno de 1 a 3 salários mínimos. Atualmente, possui investimentos em renda fixa, tem interesse em aprender sobre o mercado financeiro e acha que uma aplicação financeira para controlar os gastos é uma ideia ótima e necessária.

**Persona 2**:

![Persona](img/Persona%202.png)

Helaine Cristina tem 50 anos, é farmacêutica e tem uma remuneração de 4 ou mais salários mínimos. Helaine usa o cartão de crédito com frequência. Atualmente, possui investimentos em renda fixa e tem interesse em aprender sobre o mercado financeiro.

**Persona 3**:

![Persona](img/Persona%203.png)

Jose Geraldo Machado possui 75 anos, é aposentando e tem uma remuneração de 1 a 3 salários mínimos. Jose não possui cartão de crédito e no momento não possui nenhum tipo de investimento. Em relação ao mercado financeiro, Jose não possui interesse em aprender sobre o mercado financeiro.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                      |PARA ... `MOTIVO/VALOR`                                                        |
|--------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------|
|Letícia             | Aprender sobre o mercado financeiro                                     | Para saber gerenciar melhor o meu dinheiro                                    |
|Letícia             | Visualizar dados de compras de um modo dinâmico                         | Para ter maior entendimentos de como está meus gastos                         |
|Letícia             | Visualizar valores de juros de empréstimos                              | Para que consiga analisar as melhores opções                                  |
|Helaine             | Receber notificações de quando minha fatura estiver perto do vencimento | Para que não esqueça pagar as contas e não pagar juros                        |
|Helaine             | Simular os rendimentos dos investimentos                                | Para saber em qual tipo de investimento aplicar o meu dinheiro                |
|Helaine             | Gostaria de ler os materiais sobre investimentos                        | Para aprender sobre o mercado financeiro                                      |
|Helaine             |Gostaria de criar e ter um controle das minhas despesas. | Para que eu possa ter melhor organização pessoal.                                     |
|Jose Geraldo        | Gostaria de ter informações sobre o mercado financeiro para que eu possa ficar atualizado com as notícias correntes. | Para que eu possa ter uma facilidade na leitura das notícias atualizadas.                   |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir a criação de um controlador de gastos, com limites pré-estabelecido pelo usuário.  | ALTA | 
|RF-02| O sistema deve exibir as despesas em formato de gráficos.                                                | ALTA |
|RF-03| Conter uma função que mande notificação alertando quando estiver perto de estourar o limite separado para gastos            | MÉDIA |
|RF-04| Possibilitar ao usuário visualizar despesas futuras                                                                         | MÉDIA |
|RF-05| Calcular juros de empréstimos                                                                                               | MÉDIA |
|RF-06| Possibilitar o usuário criar uma Lista de despesas                                                                          | MÉDIA |
|RF-07| Conter um “simulador” de investimento                                                                                       | MÉDIA |
|RF-08| Conter uma página sobre notícias de investimento                                                                            | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| Site deve ser responsivo | MÉDIA | 
|RNF-02| Site deve ser compatível com os principais navegadores |  ALTA | 
|RNF-03| Site terá um layout minimalista |  ALTA |
|RNF-04| Sistema deve ser organizado e de fácil visibilidade e ter uma interface dinâmica |  ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                    |
|--|--------------------------------------------------------------|
|01| Não pode contratar terceiros para desenvolvimento do projeto |
|02| Projeto deve ser entregado até o final do semestre           |
|03| Aplicação com foco no front end                              |

