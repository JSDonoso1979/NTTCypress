/// <reference types="Cypress" />
describe("Exercice NNT", () => {

    it("Visit Page", () => {
      cy.visit("https://www.demoblaze.com/");
      cy.title().should("eq", "STORE");
      cy.screenshot('entering-webpage')
    });

    it("Selection and purchase of products", () => {
        cy.visit("https://www.demoblaze.com/");
        cy.wait(1000);
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
        cy.wait(1000);
        cy.screenshot('clicking-on-firstProduct')
        cy.get('.col-sm-12 > .btn').click().then(() => {
          cy.get('#nava').click();
          cy.wait(1000);
          cy.get(':nth-child(6) > .card > :nth-child(1) > .card-img-top').click();
          cy.wait(1000);
          cy.screenshot('clicking-on-secondProduct')
          cy.get('.col-sm-12 > .btn').click().then(() => {
            cy.get('#nava').click();
          });
          cy.wait(1000);
          cy.get('#cartur').click();
          cy.wait(2500);
          cy.screenshot('clicking-on-cart')
          cy.get('.col-lg-1 > .btn').click();
          cy.get('#name').type("Sebastián Donoso").tab();
          cy.wait(500);
          cy.get('#country').type("Ecuador").tab();
          cy.wait(500);
          cy.get('#city').type("Quito").tab();
          cy.wait(500);
          cy.get('#card').type("123-456-7890").tab();
          cy.wait(500);
          cy.get('#month').type("Enero").tab();
          cy.wait(500);
          cy.get('#year').type("2030");
          cy.wait(6000);
          cy.screenshot('complete-purchase-form')
          cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
          cy.wait(500);
          cy.get('.confirm').click();
          cy.wait(1500)
          cy.screenshot("complete-purchase")
          
        });
      });
  
    
  });