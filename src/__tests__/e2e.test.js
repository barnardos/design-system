import puppeteer from "puppeteer";

const appUrlBase =
  process.env.NODE_ENV === "CI"
    ? "http://localhost:9000"
    : "http://localhost:8000";

const routes = {
  public: {
    root: `${appUrlBase}`,
    noMatch: `${appUrlBase}/asdf`
  }
};

describe("End-to-end", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch(
      process.env.DEBUG
        ? {
            headless: false,
            slowMo: 100
          }
        : { args: ["--no-sandbox", "--disable-setuid-sandbox"] }
    );
    page = await browser.newPage();
  });

  afterEach(async () => {
    browser.close();
  });

  it("shows the index page title", async () => {
    await page.goto(routes.public.root);
    const title = await page.$eval("[data-test-title]", el => el.textContent);
    expect(title).toBe("Design system");
  });

  it("shows each sub page title", async () => {
    await page.goto(routes.public.root);
    const links = await page.$$eval("[data-test-link]", els => {
      return els.map(el => {
        return {
          title: el.getAttribute("data-test-link"),
          href: el.href
        };
      });
    });
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      await page.goto(link.href);
      await page.waitForSelector("[data-test-title]");
      const title = await page.$eval("[data-test-title]", el => el.textContent);
      const pageTitle = await page.title();
      expect(`${title} - Barnardo's`).toBe(pageTitle);
    }
  });
});
