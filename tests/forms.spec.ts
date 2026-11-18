import { test, expect } from '@playwright/test';

// Fresh test submissions are addressed to Calvin so he can verify receipt
// in the support@ inbox and his own mailbox.
const TEST_EMAIL = 'calvin@americareinhome.com';

test.describe('Home · Request a Call Back', () => {
  test('submits and shows the success state', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();

    await page.fill('input[name="first"]', 'Testcaller');
    await page.fill('input[name="last"]', 'Checkwell');
    await page.fill('input[name="phone"]', '404-555-0199');
    await page.fill('input[name="email"]', TEST_EMAIL);
    await page.selectOption('select[name="who"]', { label: 'An adult or senior' });
    await page.selectOption('select[name="help"]', { label: 'Personal care' });
    await page.check('input[name="consent"]');

    await page.click('button[type="submit"]');
    await expect(page.getByText('Thanks! Your request has been received.')).toBeVisible({ timeout: 15000 });
  });
});

test.describe('Check Care Options · wizard', () => {
  test('pediatric flow submits end to end', async ({ page }) => {
    await page.goto('/check-care-options');

    await page.click('button:has-text("A child")');
    await page.click('button:has-text("Skilled nursing at home")');
    await page.click('button:has-text("GAPP")');
    await page.click('button:has-text("Have not started yet")');

    await page.fill('input[placeholder="Enter 5-digit ZIP code"]', '30301');
    await page.selectOption('select', 'Within 30 days');
    await page.click('button:has-text("Continue")');

    await page.click('button:has-text("Parent or guardian")');

    await page.fill('input[placeholder="First name"]', 'Testcare');
    await page.fill('input[placeholder="Last name"]', 'Pathcheck');
    await page.fill('input[placeholder="(404) 555-0123"]', '404-555-0188');
    await page.fill('input[placeholder="name@example.com"]', TEST_EMAIL);
    await page.click('button:has-text("Continue")');

    await page.click('button:has-text("Phone call")');
    await page.click('button:has-text("Continue")');

    await expect(page.getByText('Review your request')).toBeVisible();
    await page.locator('input[type="checkbox"]').check();
    await page.click('button:has-text("Send My Request")');

    await page.waitForURL('**/check-care-options/confirmation**', { timeout: 20000 });
    await expect(page.getByText('Thank you, Testcare.')).toBeVisible();
    await expect(page.getByText('Pediatric care review')).toBeVisible();
  });

  test('"unsure" flow routes the coordinator option to the coordinator form', async ({ page }) => {
    await page.goto('/check-care-options');

    await page.click('button:has-text("I\'m not sure yet")');
    await page.click('button:has-text("I would rather speak with a coordinator")');

    await page.waitForURL('**/speak-with-coordinator', { timeout: 10000 });
    await expect(page.getByText('Let a care coordinator guide you')).toBeVisible();
  });
});

test.describe('Speak With a Coordinator · wizard', () => {
  test('submits end to end', async ({ page }) => {
    await page.goto('/speak-with-coordinator');

    await page.click('button:has-text("An adult or senior")');
    await page.fill('input[placeholder="First name"]', 'Testcoord');
    await page.fill('input[placeholder="Last name"]', 'Inatorcheck');
    await page.fill('input[placeholder="(404) 555-0123"]', '404-555-0177');
    await page.fill('input[placeholder="name@example.com"]', TEST_EMAIL);
    await page.selectOption('select[title="Best time"]', 'afternoon');
    await page.click('button:has-text("Phone call")');
    await page.locator('input[type="checkbox"]').check();

    await page.click('button:has-text("Request My Callback")');
    await page.waitForURL('**/speak-with-coordinator/confirmation**', { timeout: 20000 });
    await expect(page.getByText('Callback requested')).toBeVisible();
  });
});

test.describe('Careers · application', () => {
  test('submits with a résumé attachment', async ({ page }) => {
    const resumePath = '/var/folders/7b/925fnf9x5nq51lhf24vlxl100000gn/T/opencode/test-resume.pdf';

    await page.goto('/careers');

    // 01 · Opportunity
    await page.selectOption('select[title="Position"]', 'CNA — Certified Nursing Assistant');
    await page.getByLabel('Days').check();

    // 02 · About you
    await page.fill('input[placeholder="John"]', 'Testapplicant');
    await page.fill('input[placeholder="Doe"]', 'Careercheck');
    await page.fill('input[placeholder="example@gmail.com"]', TEST_EMAIL);
    await page.fill('input[placeholder="(555) 555-5555"]', '404-555-0166');
    await page.fill('input[placeholder="Atlanta"]', 'Atlanta');
    await page.fill('input[placeholder="30144"]', '30301');
    // select order: 0 position, 1 employment, 2 transport, 3 travel, 4 years, 5 credential, 6 hours, 7 heard
    await page.locator('select').nth(2).selectOption('Yes');

    // 03 · Experience
    await page.locator('select').nth(4).selectOption('3–5 years');

    // 05 · Finish
    await page.locator('input[type="file"]').setInputFiles(resumePath);
    await expect(page.getByText('test-resume.pdf')).toBeVisible();
    await page.locator('label:has-text("I certify that the information")').locator('input[type="checkbox"]').check();

    await page.click('button[type="submit"]');
    await expect(page.getByText('Thank you for applying.')).toBeVisible({ timeout: 30000 });
  });
});

test.describe('Book an Appointment · Salesforce web-to-lead', () => {
  test('posts the lead and lands on the thank-you page', async ({ page }) => {
    await page.goto('/book-an-appointment');

    await page.fill('input[name="first_name"]', 'Testbooker');
    await page.fill('input[name="last_name"]', 'Appointmentcheck');
    await page.fill('input[name="email"]', TEST_EMAIL);
    await page.fill('input[name="phone"]', '404-555-0155');
    await page.selectOption('select[name="00NHs00000wg506"]', 'Personal Care');
    await page.fill('input[type="datetime-local"]', '2026-11-20T10:00');
    await page.fill('input[name="street"]', '1 Test Street');
    await page.fill('input[name="city"]', 'Atlanta');
    await page.fill('input[name="state"]', 'GA');
    await page.fill('input[name="zip"]', '30301');
    await page.fill('textarea[name="00NHs00000whvDI"]', 'Automated E2E form route test - safe to delete.');
    // The consent checkbox input is visually hidden behind its custom-styled label.
    await page.locator('label.checkBox').click();
    await expect(page.locator('input[name="00NHs00000wg4zr"]')).toBeChecked();

    await page.click('button[name="submit"]');
    await page.waitForURL('**/thank-you**', { timeout: 30000 });
  });
});
