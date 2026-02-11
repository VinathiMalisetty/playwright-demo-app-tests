import { expect, type Page } from '@playwright/test';

export async function verifyTaskInColumn(
  page: Page,
  section: string,
  taskTitle: string,
  column: string,
  tags: string[]
): Promise<void> {
 
  await page.getByRole('button', { name: new RegExp(section, 'i') }).click();
  const columnHeader = page.getByRole('heading').filter({ hasText: column });
  await expect(columnHeader.first()).toBeVisible({ timeout: 8000 });

  const columnDiv = page.locator('div.w-80').filter({ hasText: column }).first();
  const taskCard = columnDiv.locator('div.bg-white').filter({ hasText: taskTitle }).first();
  await expect(taskCard).toBeVisible({ timeout: 8000 });

  for (const tag of tags) {
    await expect(taskCard.getByText(tag, { exact: true })).toBeVisible();
  }
}
