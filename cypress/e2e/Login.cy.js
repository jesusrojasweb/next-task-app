/// <reference types="cypress"/>
describe("Validate Login", () => {
  const testEmail = "testapp@test.com";
  const testPassword = "Th1sistext!";
  it("Validate Login - Validate Sign Up", () => {
    cy.visit("http://localhost:3000");

    cy.contains("[data-cy=home-title]", "This is the task app");

    cy.get("[data-cy=login-button]").should("exist").click();

    cy.get("#username").should("exist").type(testEmail);
    cy.get("#password").should("exist").type(testPassword);

    cy.get(".cd0ce9b03 > .ca56ae105").should("exist").click();

    cy.get("#error-element-password").should("exist");

    cy.get(".ceef6cc77 > .cf1a0a971").should("exist").click();

    cy.get("#email").should("exist").type(testEmail);
    cy.get("#password").should("exist").type(testPassword);

    cy.get(".cd0ce9b03 > .ca56ae105").click();

    cy.contains("Authorize App");

    cy.get(".c03eb9739").should("exist").click();

    cy.get("[data-cy=login-message]")
      .should("exist")
      .invoke("text")
      .should("equal", "Redirecting...");

    cy.intercept("http://localhost:3001/login?code=*").as("getUser");

    cy.wait("@getUser");

    cy.get("[data-cy=task-title]").should("exist");

    cy.intercept("http://localhost:3001/tasks").as("getTasks");

    cy.wait("@getTasks");

    cy.get("[data-cy=logout-button]").should("exist").click();

    cy.contains("[data-cy=home-title]", "This is the task app");
  });

  it("Validate Login - Validate Sign In", () => {
    cy.visit("http://localhost:3000");

    cy.contains("[data-cy=home-title]", "This is the task app");

    cy.get("[data-cy=login-button]").should("exist").click();

    cy.get("#username").should("exist").type(testEmail);
    cy.get("#password").should("exist").type(testPassword);

    cy.get(".cd0ce9b03 > .ca56ae105").should("exist").click();

    cy.get("[data-cy=login-message]")
      .should("exist")
      .invoke("text")
      .should("equal", "Redirecting...");

    cy.intercept("http://localhost:3001/login?code=*").as("getUser");

    cy.wait("@getUser");

    cy.get("[data-cy=task-title]").should("exist");

    cy.intercept("http://localhost:3001/tasks").as("getTasks");

    cy.wait("@getTasks");

    cy.get("[data-cy=logout-button]").should("exist").click();

    cy.contains("[data-cy=home-title]", "This is the task app");
  });
});
