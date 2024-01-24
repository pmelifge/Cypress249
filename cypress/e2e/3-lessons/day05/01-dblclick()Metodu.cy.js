describe('Eylem Metotlari - dblclick() Metodu', () => {
    it('dblclick() Metodunun Kullanimi', () => {
        cy.visit('https://demoqa.com/buttons');
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('exist').and('have.text', 'You have done a double click')
        // click() metoduyla birlikte kullandığımız özellikleri dblclick() metoduyla birlikte de kullanabiliriz.
    });
});




