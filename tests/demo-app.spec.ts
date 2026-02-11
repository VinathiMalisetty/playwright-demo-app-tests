import { test } from '@playwright/test';
import { login } from './fixtures/auth';
import { verifyTaskInColumn } from './helpers/board-helpers';
import testCasesData from '../test-data/test-cases.json';

// Test data from JSON file - each test uses one entry from this array
const testCases = testCasesData.testCases;

test.describe('Demo App - Data-driven test suite', () => {
  // Login once before every test so each test starts from the board
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('TC1: Web Application - Implement user authentication in To Do', async ({ page }) => {
    const data = testCases[0];
    await verifyTaskInColumn(page, data.section, data.taskTitle, data.column, data.tags);
  });

  test('TC2: Web Application - Fix navigation bug in To Do', async ({ page }) => {
    const data = testCases[1];
    await verifyTaskInColumn(page, data.section, data.taskTitle, data.column, data.tags);
  });

  test('TC3: Web Application - Design system updates in In Progress', async ({ page }) => {
    const data = testCases[2];
    await verifyTaskInColumn(page, data.section, data.taskTitle, data.column, data.tags);
  });

  test('TC4: Mobile Application - Push notification system in To Do', async ({ page }) => {
    const data = testCases[3];
    await verifyTaskInColumn(page, data.section, data.taskTitle, data.column, data.tags);
  });

  test('TC5: Mobile Application - Offline mode in In Progress', async ({ page }) => {
    const data = testCases[4];
    await verifyTaskInColumn(page, data.section, data.taskTitle, data.column, data.tags);
  });

  test('TC6: Mobile Application - App icon design in Done', async ({ page }) => {
    const data = testCases[5];
    await verifyTaskInColumn(page, data.section, data.taskTitle, data.column, data.tags);
  });
});
