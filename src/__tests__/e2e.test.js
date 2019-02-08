describe("end-to-end", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8000");
  });

  it("should display the title text on page", async () => {
    await expect(page).toMatch("Barnardo’s Design System");
  });
});
