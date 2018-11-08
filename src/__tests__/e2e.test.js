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
    expect(title).toBe("Design System");
  });

  it("shows each sub page title", async () => {
    const linkSelector = "[data-test-link]";
    const titleSelector = "[data-test-title]";

    await page.goto(routes.public.root);
    await page.waitForSelector(linkSelector);

    // Extract the results from the page.
    const links = await page.evaluate(linkSelector => {
      const elements = Array.from(document.querySelectorAll(linkSelector));
      return elements.map(element => {
        return {
          title: element.getAttribute("data-test-link"),
          href: element.href
        };
      });
    }, linkSelector);

    // Go to each page and check that the titles match
    let title;
    let pageTitle;
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      await page.goto(link.href, { waitUntil: "networkidle2" });
      await page.waitForSelector(titleSelector);
      title = await page.$eval(titleSelector, el => el.textContent);
      pageTitle = await page.title();
      expect(`${title} - Barnardo's`).toBe(pageTitle);
    }
  }, 10000);
});
