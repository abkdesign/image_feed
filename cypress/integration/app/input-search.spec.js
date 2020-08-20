describe('Input form', () =>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  });

  it('focuses input on load', ()=>{

    cy.focused()
      .should('have.id','feedInput')
  });

  it.only('accepts input', ()=>{
    const typedText = 'Cats';

    cy.get('#feedInput')
      .type(typedText)
      .should('have.value',typedText)
      .type(" ")
  });

  it.only('accepts 2 tags input', ()=>{
    const typedText1 = 'Dogs';
    const typedText2 = 'Cats';
    cy.get('#feedInput')
      .type(typedText1)
      .should('have.value',typedText1)
      .type(" ")
    
    cy.get('#feedInput')
      .type(typedText2)
      .should('have.value',` ${typedText2}`)
      .type(" ")
  });
});