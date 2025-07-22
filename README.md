# 📋 Avaliação Técnica — Estágio QA

Repositório criado para a entrega da **Avaliação Técnica QA**, contendo:
- 🧩 **Script em Python** para verificar palíndromos.
- ⚙️ **Teste automatizado Cypress** para validar o botão **Enviar** em uma página HTML simulada.
- 🗂️ **Fluxograma** descrevendo o fluxo de teste manual para um **campo de busca**.

---

## 🚀 **Visão Técnica**

### ✔️ **1) Script Python — Palíndromo**
O script `palindromo.py` solicita uma única palavra ao usuário, remove pontuação, ignora espaços e diferenciação de maiúsculas/minúsculas.  
Ele utiliza **ponteiro duplo** em vez de regex, evitando sobrecarga de memória e tornando a lógica mais performática para checar se a palavra é um palíndromo.

Exemplos válidos:
- **arara** → É um palíndromo.
- **teste** → Não é um palíndromo.

---

### ✔️ **2) Teste Automatizado Cypress — Botão Enviar**

Estrutura:  
- **`SendButton/`** → Pasta com o teste `sendButton.cy.js`.  
- Um **`index.html`** simula uma página com o botão **Enviar**, que ao ser clicado mostra a mensagem **"Enviado com sucesso!"**.
- O teste usa `cy.intercept` para simular uma requisição `GET` (`/api/page-data`) que carrega dados da página. Assim, o teste aguarda `cy.wait('@loadPageData')` para evitar falhas por timeout.
- Após a página estar carregada, o teste verifica se o botão está **visível**, **clica** e valida a mensagem final.

---

### ✔️ **3) Fluxograma — Validação Campo de Busca**

Anexado como **PDF**, o fluxograma detalha:
- Pesquisa com **palavra válida** → resultado exibido.
- Pesquisa com **palavra inválida/inexistente** → mensagem de “Nenhum resultado”.
- Pesquisa com **campo vazio** → bloqueio com alerta de “Digite uma palavra”.

Para cada fluxo, existe uma saída **OK** (sucesso) ou **BUG** (falha não tratada).  
👉 [📄 Ver Fluxograma](./Fluxograma%20de%20teste%20-%20Campo%20BUSCAR.pdf)

---

## 📂 **Estrutura do Repositório**

