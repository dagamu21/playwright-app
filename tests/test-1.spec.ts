import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('dagamu21');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('G21m1560!');
  await page.getByTestId('royal-login-button').click();
  await page.goto('https://www.facebook.com/');
  await expect(page.getByRole('link', { name: 'Daniel Galicia Murillo', exact: true })).toBeVisible();
});
