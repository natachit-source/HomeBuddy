import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hb-test.stage.sirenltd.dev/');
  await page.locator('#zip_header').getByText('Enter ZIP Code').click();
  await page.locator('#zipCode').fill('10001');
  await page.locator('#zip_header').getByRole('button', { name: 'Get estimate' }).click();
  await page.locator('label').filter({ hasText: 'Countertop(s)' }).locator('img').click();
  await page.locator('label').filter({ hasText: 'Lighting' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Go to homepage' }).click();
});