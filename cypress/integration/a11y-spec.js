const urls = [
  "components/content/",
  "components/navigation/",
  "components/forms/",
  "components/structure/"
];

describe("Components a11y standards", () => {
  urls.forEach(url => {
    it(`Should have no violations on "${url}"`, () => {
      cy.visit(url)
        .waitForRouteChange()
        .injectAxe()
        .configureAxe({
          rules: [
            {
              id: "html-has-lang",
              enabled: false
            },
            {
              id: "heading-order",
              enabled: url === "components/content/" ? false : true
            }
          ]
        })
        .checkA11y();
    });
  });
});
