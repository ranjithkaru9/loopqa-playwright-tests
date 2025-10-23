import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 70000,
  expect: { timeout: 20000 },

  // Run on Chromium
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   // Firefox and WebKit
   // {name: 'Firefox',use: { ...devices['Desktop Firefox'] },},
   // {name: 'WebKit',use: { ...devices['Desktop Safari'] },},
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});
