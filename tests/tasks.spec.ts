import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import tasks from '../data/tasks.json' assert { type: 'json' };

test.describe('LoopQA Data-Driven Task Validation', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  for (const task of tasks) {
    test(`Validate "${task.taskName}" in ${task.appName} → ${task.column}`, async ({ page }) => {
      // Navigate to the correct project
      if (task.appName === 'Mobile Application') {
        await page.getByRole('button', { name: /^Mobile Application/ }).click();
        await expect(page.locator('h1', { hasText: 'Mobile Application' })).toBeVisible();
      } else {
        await expect(page.locator('h1', { hasText: 'Web Application' })).toBeVisible();
      }

      // Locate the correct column container
      const column = page.locator(
        `xpath=//h2[contains(@class,'font-semibold') and normalize-space(text())='${task.column}']/following-sibling::*[1]`
      );
      await expect(column).toBeVisible();

      // Locate the correct task card
      const card = column.locator('div.bg-white', {
        has: page.locator('h3.font-medium', { hasText: task.taskName }),
      });
      await expect(card).toBeVisible();

      // Verify all tags within the task card
      if (task.tags?.length) {
        for (const tag of task.tags) {
          await expect(card.locator('span', { hasText: tag })).toBeVisible();
        }
      }

      console.log(`Verified "${task.taskName}" in ${task.appName} (${task.column})`);
    });
  }
});
