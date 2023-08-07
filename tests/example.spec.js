// @ts-check
import { test, expect } from '@playwright/test';
const CAT_URL_FIX = 'https://cataas.com';

const LOCAL_HOST_URL = 'http://localhost:5173/';

test('App Random Facts', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imgSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imgSrc?.startsWith(CAT_URL_FIX)).toBeTruthy();
});
