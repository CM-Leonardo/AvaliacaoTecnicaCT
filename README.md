# Desafio Técnico - QA

Este repositório contém a resolução do desafio técnico proposto pela **Cotefácil**. A proposta inclui três tarefas:

- **Script em Python para verificação de palíndromos**
- **Teste automatizado com Cypress**
- **Fluxograma de teste manual do campo de busca**


---


## 🐍 Script Python - Verificador de Palíndromos
Um script em Python que recebe uma única palavra, remove pontuações e espaços, converte tudo para minúsculo e verifica se é um palíndromo.
Para isso, utiliza uma lógica de ponteiros duplos (dois índices que avançam em direções opostas) em vez de regex, tornando o algoritmo mais eficiente, direto e menos custoso em memória, já que não depende de expressões regulares ou processamento adicional de padrões.
A abordagem é estruturalmente leve, clara e fácil de entender, atendendo perfeitamente a proposta de validação de palíndromos sem overhead.

### ▶️ Como executar:
1. Clone o projeto.
2. Certifique-se de ter o Python instalado (versão 3.6 ou superior).
3. Execute o script:
  python palindromo.py
4. Digite uma única palavra quando solicitado.


## 🧪 Teste automatizado com Cypress

O teste valida o funcionamento do botão "**Enviar**" em uma página simples.
Para garantir estabilidade e evitar testes flaky, foi utilizado `cy.intercept` para simular uma requisição `GET (/api/page-data)` que representa o carregamento inicial da página. Assim, o teste só inicia após a resposta simulada, usando `cy.wait('@loadPageData')`, o que evita erros de sincronização e timeout.

### ✔️ O que é testado:
- Visibilidade do botão
- Clique no botão
- Exibição da mensagem "Enviado com sucesso!"

### ▶️ Como executar:
1. Clone o projeto.
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
3. Instale as dependências:
  npm install
4. Inicie um servidor local (ex: com Live Server) na pasta onde está o index.html.
5. Rode o Cypress:
  npx cypress open
6. Execute o teste sendbutton.spec.js.

![Execução do teste Cypress](https://github.com/CM-Leonardo/AvaliacaoTecnicaCT/blob/main/SendButtonValidate.jpg)


## 🧭 Teste Manual - Campo "Buscar"
O fluxograma de teste manual (em PDF) descreve cenários de validação do campo "Buscar", incluindo:
- Busca com palavra válida
- Busca com palavra inválida/inexistente
- Busca com campo vazio

Cada cenário aponta o fluxo correto e identifica possíveis bugs, de acordo com o comportamento esperado da aplicação.

📄 **Arquivo:** [Fluxograma de teste - Campo BUSCAR.pdf](./Fluxograma%20de%20teste%20-%20Campo%20BUSCAR.pdf)
