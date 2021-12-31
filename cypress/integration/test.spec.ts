/// <reference types="cypress" />

describe('hello', () => {
  it('should', () => {
    cy.visit('http://www.onet.pl');
    expect(1).equal(1);
  });
});
