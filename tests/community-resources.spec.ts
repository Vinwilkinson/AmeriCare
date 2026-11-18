import { test, expect } from '@playwright/test';

test.describe('Community Resources', () => {
  test('renders hero, organizations, and CTA', async ({ page }) => {
    await page.goto('/resources/community');
    await expect(page.getByRole('heading', { name: "You're not doing this alone." })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Organizations we trust' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Together We Care' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Visit togetherwecarega.org/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /serve families in Georgia/ })).toBeVisible();
    await expect(page.getByText("AmeriCare shares them as a community service")).toBeVisible();
  });

  test('category chip filters organizations', async ({ page }) => {
    await page.goto('/resources/community');
    await page.click('button:has-text("Jobs & day programs")');
    await expect(page.getByRole('heading', { name: 'Together We Care' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'BlazeSports America' })).toBeHidden();
    // Deselecting the chip shows everyone again
    await page.click('button:has-text("Jobs & day programs")');
    await expect(page.getByRole('heading', { name: 'BlazeSports America' })).toBeVisible();
  });

  test('search filters and empty state clears', async ({ page }) => {
    await page.goto('/resources/community');
    await page.fill('input[aria-label="Search organizations"]', 'Childkind');
    await expect(page.getByRole('heading', { name: 'Childkind' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'BlazeSports America' })).toBeHidden();

    await page.fill('input[aria-label="Search organizations"]', 'zzzznotfound');
    await expect(page.getByText('No organizations match your search.')).toBeVisible();
    await page.click('button:has-text("Clear search")');
    await expect(page.getByRole('heading', { name: 'Together We Care' })).toBeVisible();
  });

  test('Resources nav dropdown links to community page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a[href="/resources"]').first().hover();
    const dropdownLink = page.locator('a[href="/resources/community"]:has-text("Community Resources")').first();
    await expect(dropdownLink).toBeVisible();
    await dropdownLink.click();
    await page.waitForURL('**/resources/community', { timeout: 10000 });
    await expect(page.getByRole('heading', { name: "You're not doing this alone." })).toBeVisible();
  });
});
