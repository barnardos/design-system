import { AxePuppeteer } from "axe-puppeteer";

const componentPages = ["content", "navigation", "forms"];

describe("accessibility", () => {
  it("should have no violations for components", async () => {
    for (const href of componentPages) {
      await page.goto(`http://localhost:8000/${href}`);
      const { violations } = await new AxePuppeteer(page)
        .disableRules("heading-order")
        .analyze();
      expect(violations).toHaveLength(0);
    }
  }, 10000);
});