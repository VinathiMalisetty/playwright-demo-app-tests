import { expect, type Page } from '@playwright/test';

/**
 * Navigate to a section, find the column, and check that the task is there with the right tags.
 * Uses simple parameters so each test is easy to read and debug.
 * Locators match the actual DOM: columns are div.w-80, cards are div.bg-white, column headers include "(n)".
 */
export async function verifyTaskInColumn(
  page: Page,
  section: string,
  taskTitle: string,
  column: string,
  tags: string[]
): Promise<void> {
  // Step 1: Go to the section (Web Application or Mobile Application) — they are buttons, not links
  await page.getByRole('button', { name: new RegExp(section, 'i') }).click();
  await page.waitForLoadState('networkidle');

  // Step 2: Column headers in the DOM are "To Do (2)", "In Progress (1)", "Done (1)" — use partial match
  const columnHeader = page.getByRole('heading', { level: 2 }).filter({ hasText: column });
  await expect(columnHeader.first()).toBeVisible({ timeout: 8000 });

  // Step 3: Columns are divs with class w-80 (not <section>). Task cards inside are div.bg-white.
  const columnDiv = page.locator('div.w-80').filter({ hasText: column }).first();
  const taskCard = columnDiv.locator('div.bg-white').filter({ hasText: taskTitle }).first();

  await expect(taskCard).toBeVisible({ timeout: 8000 });

  // Step 4: Check each tag is shown on the task card (tags are in <span> with exact text)
  for (const tag of tags) {
    await expect(taskCard.getByText(tag, { exact: true })).toBeVisible();
  }
}
