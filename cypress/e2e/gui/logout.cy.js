describe("Logout", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("should be able user logout", () => {
    cy.logout();

    // Para pegar a url atual utilizar a função url
    // Verificando se a url é igual a localhost/users/sign_in
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/users/sign_in`);
  });
});
