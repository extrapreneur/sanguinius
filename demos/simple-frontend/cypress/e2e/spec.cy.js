describe("Extrapreneur adress title correct", () => {
  it("Successfully loads extrapreneur.se", () => {
    cy.visit("https://www.extrapreneur.se");
  });

  it("Check adress title", () => {
    cy.get("#block-626e14bd56108b0b6370 > div > p:nth-child(1) > strong")
      .contains("Extrapreneur AB")
      .should("be.visible");
  });
});
