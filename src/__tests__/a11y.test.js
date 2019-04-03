import { AxePuppeteer } from "axe-puppeteer";

const componentPages = ["content", "navigation", "forms", "structure"];

describe("accessibility", () => {
  it("should have no violations for components", async () => {
    for (const href of componentPages) {
      await page.goto(`http://localhost:8000/components/${href}`, {
        timeout: 0
      });
      const { violations } = await new AxePuppeteer(page)
        .disableRules("heading-order")
        .exclude(".algolia-autocomplete")
        .analyze();
      expect(violations).toHaveLength(0);
    }
  }, 1000000);
});
