import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://hb-test.stage.sirenltd.dev/');

  await page.locator('#zip_header').getByText('Enter ZIP Code').click();
  await page.locator('#zipCode').fill('10001');
  await page.locator('#zip_header').getByRole('button', { name: 'Get estimate' }).click();

  await page.locator('label').filter({ hasText: 'Kitchen cabinets' }).locator('img').click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('label').filter({ hasText: 'Replace all or most cabinets' }).locator('img').click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('label').filter({ hasText: 'Multi-family home' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('label').filter({ hasText: 'Yes' }).first().click();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.locator('label').filter({ hasText: 'No' }).locator('img').click();
  await page.locator('label').filter({ hasText: 'Yes' }).last().locator('img').click();

  await page.getByRole('button', { name: 'Next' }).click();

  const phoneInput = page.locator('input[type="tel"]').first();
  await phoneInput.waitFor({ state: 'visible' });
  await phoneInput.fill('214');

  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('label').filter({ hasText: '$10K to $30K' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByLabel('Full name').fill('Joe Smith');
  await page.getByLabel('Email address').fill('joe@co.uk');

  await page.getByRole('button', { name: 'Next' }).click();


});
