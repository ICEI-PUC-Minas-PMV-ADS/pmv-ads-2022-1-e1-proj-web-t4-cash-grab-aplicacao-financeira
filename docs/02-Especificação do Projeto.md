# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

**Persona 1**:

(img/Persona 1.png)

Letícia Ophelia tem 24 anos, é desenvolvedora de software e tem uma remuneração de 1 a 3 salários mínimos. Letícia usa o cartão de crédito regularmente, gastando em torno de 1 a 3 salários mínimos. Atualmente, possui investimentos em renda fixa, tem interesse em aprender sobre o mercado financeiro e acha que uma aplicação financeira para controlar os gastos é uma ideia ótima e necessária.

**Persona 2**:

(img/Persona 2.png)

Helaine Cristina tem 50 anos, é farmacêutica e tem uma remuneração de 4 ou mais salários mínimos. Helaine usa o cartão de crédito com frequência. Atualmente, possui investimentos em renda fixa e tem interesse em aprender sobre o mercado financeiro.

**Persona 3**:

(img/Persona 3.png)

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
|Jose Geraldo        | Gostaria de usar uma aplicação simples                                  | Para que não tenha dificuldades em conseguir ler as notícias                  |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir a criação de tabela com controle dos gastos como, os limites pré-estabelecido pelo o usuário do que ele vai gastar | ALTA | 
|RF-002| Exibir as despesas em formato de gráficos e porcentagem ou barra de progresso                                               | ALTA |
|RF-003| Conter uma função que mande notificação alertando quando estiver perto de estourar o limite separado para gastos            | MÉDIA |
|RF-004| Possibilitar ao usuário visualizar despesas futuras                                                                         | MÉDIA |
|RF-005| Calcular juros de empréstimos                                                                                               | MÉDIA |
|RF-006| Possibilitar o usuário criar uma Lista de despesas                                                                          | MÉDIA |
|RF-007| Conter um “simulador” de investimento                                                                                       | MÉDIA |
|RF-008| Conter uma página sobre notícias de investimento                                                                            | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Site deve ser responsivo | MÉDIA | 
|RNF-002| Site deve ser compatível com os principais navegadores |  ALTA | 
|RNF-003| Site terá um layout minimalista |  ALTA |
|RNF-004| Sistema deve ser organizado e de fácil visibilidade e ter uma interface dinâmica |  ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                    |
|--|--------------------------------------------------------------|
|01| Não pode contratar terceiros para desenvolvimento do projeto |
|02| Projeto deve ser entregado até o final do semestre           |
|03| Aplicação com foco no front end                              |

