import { expect, Page } from '@playwright/test';
export async function login(page: Page) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByRole('textbox',{name: 'Username' }).fill('admin');
  await page.getByRole('textbox',{name: 'Password' }).fill('password123');
  await page.getByRole('button',{name: 'Sign in' }).click();
   
  // wait for the dashboard to load
  await expect(page.getByRole('banner').getByRole('heading',{name:'Web Application' })).toBeVisible();

}