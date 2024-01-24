describe('Eylem Metotları - click() Metodu', () => {
    it('click() Metodunun Kullanımı', () => {
        cy.visit('https://www.letskodeit.com/practice');
        // Elementin merkezine tıklama
        // cy.get('#opentab').click();
        // Elementin farklı konumlarına tıklama
        // cy.get('#opentab').click('topLeft');
        // cy.get('#opentab').click('top');
        // cy.get('#opentab').click('topRight');
        // cy.get('#opentab').click('left');
        // cy.get('#opentab').click('center');
        // cy.get('#opentab').click('right');
        // cy.get('#opentab').click('bottomLeft');
        // cy.get('#opentab').click('bottom');
        // cy.get('#opentab').click('bottomRight');
        // Koordinat belirterek tıklama
        // cy.get('#opentab').click(-20, -20, {force:true});
        // Birden çok elemente tıklama
        // cy.get('[type="checkbox"][name="cars"]').click({multiple:true})
        // Tıklanacak elementi sayfanın istenen bölümüne kaydırma
        cy.get('#mousehover').click({scrollBehavior:'center'})
    });
});