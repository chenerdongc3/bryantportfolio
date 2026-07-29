import { expect, test } from "@playwright/test";

test("desktop navigation discovers the public pages", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Find the problem in data");
  await expect(page.getByRole("heading", { level: 2, name: /See the problems/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Enterprise AI Product Team" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Hello" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Hello logo" })).toBeVisible();
  await expect(page.getByRole("img", { name: "KuCoin logo" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "ADHD Companion Alarm" })).toBeVisible();
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { level: 1, name: "Project work!" })).toBeVisible();
});

test("mobile sheet closes after navigation", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("language choice persists and theme controls are absent", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: /切换到.*主题/ })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Find the problem in data");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("button", { name: "切换到中文" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("用数据发现问题");
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("用数据发现问题");
  await expect(page.getByRole("navigation", { name: "主导航" }).getByRole("link", { name: "项目" })).toBeVisible();
  await page.getByRole("button", { name: "切换到 English" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Find the problem in data");
});

test("English remains consistent across public pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Projects" }).click();
  await expect(page.getByRole("heading", { level: 1, name: /Project work/ })).toBeVisible();
  await page.getByRole("link", { name: /Travel Assistant Agent/ }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Travel Assistant Agent" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Breadcrumbs" })).toContainText("Home");
});

test("project deep links contain prerendered content", async ({ page }) => {
  const response = await page.goto("/projects/travel-assistant-agent");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1, name: "Travel Assistant Agent" })).toBeVisible();
  const html = await response?.text();
  expect(html).toContain("Agent orchestration");
  expect(html).toContain('type="application/ld+json"');
});

test("German notes are indexable and unknown routes return 404", async ({ page }) => {
  await page.goto("/notes");
  await expect(page.getByRole("heading", { level: 2, name: "German Study Notes" })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "index, follow");

  await page.getByRole("link", { name: "German Study Notes" }).click();
  await expect(page).toHaveURL(/\/notes\/german$/);
  await expect(page.getByRole("heading", { level: 2, name: "Part I · Morphology" })).toBeVisible();
  await page.getByRole("link", { name: "1.1 Articles" }).click();
  await expect(page).toHaveURL(/\/notes\/german\/articles$/);
  await expect(page.getByRole("heading", { level: 1, name: "Articles" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "German Study Notes directory" })).toBeVisible();

  const response = await page.goto("/definitely-missing");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
});

test("full-stack roadmap lessons expose actionable milestones", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  const response = await page.goto("/notes/fullstack-roadmap/backend-api");
  expect(response?.status()).toBe(200);
  await expect(page.getByText("Suggested duration · 3 weeks")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Hands-on practice" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Stage deliverables" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Completion criteria" })).toBeVisible();
  const sizes = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  expect(sizes.scroll).toBeLessThanOrEqual(sizes.client);
  expect(await response?.text()).toContain("Write an OpenAPI or interface contract");
});

test("public pages do not overflow common viewport widths", async ({ page }) => {
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/about");
    const sizes = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(sizes.scroll, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(sizes.client);
  }
});
