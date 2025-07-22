describe('Validating the operation of the send button', () => {
    beforeEach(() => {
        // Intercepta o método que carrega as informações na página
        cy.intercept(
            {
                method: 'GET',
                pathname: '/api/page-data'
            },
            {
                statusCode: 200,
                body: {
                    data: 'Fake page data'
                }
            }
        ).as('loadPageData')

        cy.visit('http://127.0.0.1:5500/index.html')
        //Aguarda as informações serem carregadas antes de iniciar o teste. 
        cy.wait('@loadPageData')
    })

    it('Successfully', () => {
        // Busca o botão enviar, cria alias e valida visibilidade
        cy.get('#btn-enviar')
            .as('button')
            .should('be.visible')

        // Usa o alias, clica e valida mensagem de sucesso
        cy.get('@button').click()
        cy.get('#mensagem')
            .should('contain.text', 'Enviado com sucesso!')
    })
})
