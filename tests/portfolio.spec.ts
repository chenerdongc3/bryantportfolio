import { expect, test } from "@playwright/test";

test("desktop navigation discovers the public pages", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("用数据发现问题");
  await expect(page.getByRole("heading", { level: 2, name: /先看我解决过/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Noumi" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "ADHD 情感陪伴闹钟" })).toBeVisible();
  await page.getByRole("navigation", { name: "主导航" }).getByRole("link", { name: "项目" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { level: 1, name: "项目实践" })).toBeVisible();
});

test("mobile sheet closes after navigation", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "打开导航菜单" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("navigation", { name: "移动端主导航" }).getByRole("link", { name: "关于" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("theme choice persists", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await page.getByRole("button", { name: "切换到暗色主题" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("project deep links contain prerendered content", async ({ page }) => {
  const response = await page.goto("/projects/travel-assistant-agent");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1, name: "旅行助手 Agent" })).toBeVisible();
  const html = await response?.text();
  expect(html).toContain("多范式 Agent 编排");
  expect(html).toContain('type="application/ld+json"');
});

test("German notes are indexable and unknown routes return 404", async ({ page }) => {
  await page.goto("/notes");
  await expect(page.getByRole("heading", { level: 2, name: "德语学习笔记" })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "index, follow");

  await page.getByRole("link", { name: "德语学习笔记" }).click();
  await expect(page).toHaveURL(/\/notes\/german$/);
  await expect(page.getByRole("heading", { level: 2, name: "第一部分 词法" })).toBeVisible();
  await page.getByRole("link", { name: "1.1 冠词 Articles" }).click();
  await expect(page).toHaveURL(/\/notes\/german\/articles$/);
  await expect(page.getByRole("heading", { level: 1, name: "冠词 Articles" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "德语学习笔记目录" })).toBeVisible();

  const response = await page.goto("/definitely-missing");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "页面没有找到" })).toBeVisible();
});

test("public pages do not overflow common viewport widths", async ({ page }) => {
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/about");
    const sizes = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(sizes.scroll, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(sizes.client);
  }
});
