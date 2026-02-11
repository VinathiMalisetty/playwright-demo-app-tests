/**
 * Login fixture and helper for Demo App.
 * Credentials: admin / password123
 */

import { test as baseTest, type Page } from '@playwright/test';

export const DEMO_APP = {
  baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app',
  username: 'admin',
  password: 'password123',
} as const;

export async function login(page: Page): Promise<void> {
  await page.goto('/');
  await page.getByLabel(/username/i).fill(DEMO_APP.username);
  await page.getByLabel(/password/i).fill(DEMO_APP.password);
  await page.getByRole('button', { name: /sign in/i }).click();
}

export const test = baseTest.extend<{ authenticatedPage: Page }>({
  authenticatedPage: async ({ page }, use) => {
    await login(page);
    await use(page);
  },
});
