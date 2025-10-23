import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test.describe('Login Functionality', () => {
  test('Verify successful login redirects to dashboard', async ({ page }) => {
    await login(page);
    await expect(page.locator('h1', { hasText: 'Web Application' })).toBeVisible();
    console.log('Login successful & dashboard loaded');
  });
});
