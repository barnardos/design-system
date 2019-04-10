describe(`Drilling down to design standards colour page`, () => {
  it(`Successfully loads homepage`, () => {
    cy.visit(`/`).waitForRouteChange();
  });

  it(`Has link to standards page`, () => {
    cy.getByText("Standards").click();
    cy.waitForRouteChange()
      .location(`pathname`)
      .should(`equal`, `/standards/`);
  });

  it(`Has onwards link the colour page`, () => {
    cy.getByText("Colour").click();
    cy.waitForRouteChange()
      .location(`pathname`)
      .should(`equal`, `/standards/colour/`);
  });

  it(`Has the correct title`, () => {
    cy.queryByText("Colour").should("exist");
  });
});
