import puppeteer from "puppeteer";

const appUrlBase =
  process.env.NODE_ENV === "CI"
    ? "http://localhost:9000"
    : "http://localhost:8000";

const routes = {
  public: {
    root: `${appUrlBase}`
  }
};

describe("end-to-end", () => {
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
    const titleSelector = "[data-test-title]";
    await page.goto(routes.public.root);
    await page.waitForSelector(titleSelector);
    const title = await page.$eval(titleSelector, el => el.textContent);
    expect(title).toBe("Barnardo’s Design System");
  });
});
