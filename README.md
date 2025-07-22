# Desafio Técnico - QA

Este repositório contém a resolução de um desafio técnico para a vaga de estágio em QA. A proposta inclui três tarefas:

- **Teste automatizado com Cypress**
- **Script em Python para verificação de palíndromos**
- **Fluxograma de teste manual do campo de busca**

---

## 🧪 Teste automatizado com Cypress

O teste valida o funcionamento do botão "Enviar" em uma página simples.

### ✔️ O que é testado:
- Visibilidade do botão
- Clique no botão
- Exibição da mensagem "Enviado com sucesso!"

### ▶️ Como executar:
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale as dependências:
  npm install
3. Inicie um servidor local (ex: com Live Server) na pasta onde está o index.html.
4. Rode o Cypress:
  npx cypress open
5. Execute o teste sendbutton.spec.js.

## 🐍 Script Python - Verificador de Palíndromos
Um script simples que recebe uma palavra e informa se ela é um palíndromo. Foi utilizado o conceito de ponteiros duplos, sem uso de regex ou alocação dinâmica de memória.

##▶️ Como executar:
1. Certifique-se de ter o Python instalado (versão 3.6 ou superior).
2. Execute o script:
  python palindromo.py
3. Digite uma única palavra quando solicitado.

## 🧭 Teste Manual - Campo "Buscar"
O fluxograma de teste manual (em PDF) descreve cenários de validação do campo "Buscar", incluindo:
- Busca com palavra válida
- Busca com palavra inválida/inexistente
- Busca com campo vazio

Cada cenário aponta o fluxo correto e identifica possíveis bugs, de acordo com o comportamento esperado da aplicação.

📄 Arquivo: Fluxograma de teste - Campo BUSCAR.pdf
