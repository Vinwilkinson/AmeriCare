import { test, expect } from '@playwright/test';

test.describe('Care Path Wizard - Pediatric Branch', () => {
  test('completes the full pediatric care path flow', async ({ page }) => {
    await page.goto('/check-care-options');

    // Step 1: Who needs care?
    await expect(page.locator('h2')).toContainText('Who needs care?');
    await page.click('button:has-text("A child")');
    await page.waitForTimeout(300);

    // Step 2: What kind of help?
    await expect(page.locator('h2')).toContainText('What kind of help');
    await page.click('button:has-text("Skilled nursing at home")');
    await page.waitForTimeout(300);

    // Step 3: Which program?
    await expect(page.locator('h2')).toContainText('Which program');
    await page.click('button:has-text("GAPP")');
    await page.waitForTimeout(300);

    // Step 4: Where are you in the process?
    await expect(page.locator('h2')).toContainText('Where are you in the GAPP');
    await page.click('button:has-text("Have not started yet")');
    await page.waitForTimeout(300);

    // Step 5: Where and when?
    await expect(page.locator('h2')).toContainText('Where and when');
    await page.fill('input[placeholder="Enter 5-digit ZIP code"]', '30144');
    await page.selectOption('select', 'As soon as possible');
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(300);

    // Step 6: Relationship
    await expect(page.locator('h2')).toContainText('relationship to the child');
    await page.click('button:has-text("Parent or guardian")');
    await page.waitForTimeout(300);

    // Step 7: Contact info
    await expect(page.locator('h2')).toContainText('Who should AmeriCare contact');
    await page.fill('input[placeholder="First name"]', 'Jane');
    await page.fill('input[placeholder="Last name"]', 'Smith');
    await page.fill('input[placeholder="(404) 555-0123"]', '4045551234');
    await page.fill('input[placeholder="name@example.com"]', 'jane@example.com');
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(300);

    // Step 8: Contact preference
    await expect(page.locator('h2')).toContainText('How may AmeriCare contact you');
    await page.click('button:has-text("Phone call")');
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(300);

    // Step 9: Review
    await expect(page.locator('h2')).toContainText('Review your request');
    await expect(page.locator('text=Child / pediatric care')).toBeVisible();
    await expect(page.locator('text=Skilled nursing at home')).toBeVisible();
    await expect(page.locator('text=GAPP')).toBeVisible();
    await expect(page.locator('text=30144')).toBeVisible();
    await expect(page.locator('text=Jane Smith')).toBeVisible();

    // Check consent and submit
    await page.click('label:has-text("I agree that AmeriCare")');
    await page.click('button:has-text("Send My Request")');

    // Should redirect to confirmation
    await page.waitForURL('**/check-care-options/confirmation', { timeout: 10000 });
    await expect(page.locator('h1')).toContainText('AmeriCare received your request');
  });
});

test.describe('Care Path Wizard - Adult Branch', () => {
  test('completes the full adult care path flow', async ({ page }) => {
    await page.goto('/check-care-options');

    // Step 1: Who needs care?
    await page.click('button:has-text("An adult or senior")');
    await page.waitForTimeout(300);

    // Step 2: What type of support?
    await expect(page.locator('h2')).toContainText('What type of support');
    await page.click('button:has-text("Personal support")');
    await page.waitForTimeout(300);

    // Step 3: Which program?
    await page.click('button:has-text("CCSP")');
    await page.waitForTimeout(300);

    // Step 4: Where are you in the process?
    await page.click('button:has-text("Application or assessment in progress")');
    await page.waitForTimeout(300);

    // Step 5: Where and when?
    await page.fill('input[placeholder="Enter 5-digit ZIP code"]', '30301');
    await page.selectOption('select', 'Within 30 days');
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(300);

    // Step 6: Relationship
    await expect(page.locator('h2')).toContainText('relationship to the person');
    await page.click('button:has-text("Family member or caregiver")');
    await page.waitForTimeout(300);

    // Step 7: Contact info
    await page.fill('input[placeholder="First name"]', 'John');
    await page.fill('input[placeholder="Last name"]', 'Doe');
    await page.fill('input[placeholder="(404) 555-0123"]', '4045559999');
    await page.fill('input[placeholder="name@example.com"]', 'john@example.com');
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(300);

    // Step 8: Contact preference
    await page.click('button:has-text("Text message")');
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(300);

    // Step 9: Review
    await expect(page.locator('h2')).toContainText('Review your request');
    await expect(page.locator('text=Adult or senior care')).toBeVisible();
    await expect(page.locator('text=Personal support')).toBeVisible();
    await expect(page.locator('text=CCSP')).toBeVisible();

    // Verify back button works
    await page.click('button:has-text("Back")');
    await expect(page.locator('h2')).toContainText('How may AmeriCare contact you');
    await page.click('button:has-text("Continue")');
    await expect(page.locator('h2')).toContainText('Review your request');
  });
});

test.describe('Care Path Wizard - Unsure Branch', () => {
  test('handles the unsure flow correctly', async ({ page }) => {
    await page.goto('/check-care-options');

    // Step 1: Who needs care?
    await page.click('button:has-text("I\'m not sure yet")');
    await page.waitForTimeout(300);

    // Step 2: Which statement sounds closest?
    await expect(page.locator('h2')).toContainText('Which statement sounds closest');
    await page.click('button:has-text("Care for a child")');
    await page.waitForTimeout(300);

    // Should redirect to pediatric flow step 2
    await expect(page.locator('h2')).toContainText('What kind of help');
  });
});

test.describe('Care Path Wizard - Validation', () => {
  test('shows validation errors for empty fields', async ({ page }) => {
    await page.goto('/check-care-options');

    // Step 1: Select audience
    await page.click('button:has-text("A child")');
    await page.waitForTimeout(300);

    // Step 2: Select need
    await page.click('button:has-text("Skilled nursing at home")');
    await page.waitForTimeout(300);

    // Step 3: Select coverage
    await page.click('button:has-text("GAPP")');
    await page.waitForTimeout(300);

    // Step 4: Select status
    await page.click('button:has-text("Have not started yet")');
    await page.waitForTimeout(300);

    // Step 5: Try to continue without filling fields
    await page.click('button:has-text("Continue")');
    await expect(page.locator('[role="alert"]')).toContainText('Please enter care zip code.');
  });

  test('validates ZIP code format', async ({ page }) => {
    await page.goto('/check-care-options');

    await page.click('button:has-text("A child")');
    await page.waitForTimeout(300);
    await page.click('button:has-text("Skilled nursing at home")');
    await page.waitForTimeout(300);
    await page.click('button:has-text("GAPP")');
    await page.waitForTimeout(300);
    await page.click('button:has-text("Have not started yet")');
    await page.waitForTimeout(300);

    await page.fill('input[placeholder="Enter 5-digit ZIP code"]', '123');
    await page.selectOption('select', 'As soon as possible');
    await page.click('button:has-text("Continue")');
    await expect(page.locator('[role="alert"]')).toContainText('valid 5-digit ZIP code');
  });
});

test.describe('Care Path Wizard - Start Over', () => {
  test('resets the form when Start Over is clicked', async ({ page }) => {
    await page.goto('/check-care-options');

    await page.click('button:has-text("A child")');
    await page.waitForTimeout(300);
    await page.click('button:has-text("Skilled nursing at home")');
    await page.waitForTimeout(300);

    // Click Start Over
    await page.click('button:has-text("Start Over")');
    await page.waitForTimeout(300);

    // Should be back at step 1
    await expect(page.locator('h2')).toContainText('Who needs care?');
  });
});

test.describe('Coordinator Form', () => {
  test('validates required fields', async ({ page }) => {
    await page.goto('/speak-with-coordinator');

    // Try to submit without filling fields
    await page.click('button:has-text("Request My Callback")');
    // Should show toast error (form shouldn't submit)
    await expect(page).toHaveURL('/speak-with-coordinator');
  });

  test('fills and submits the coordinator form', async ({ page }) => {
    await page.goto('/speak-with-coordinator');

    // Select audience
    await page.click('button:has-text("A child")');
    await page.waitForTimeout(200);

    // Fill contact info
    await page.fill('input[placeholder="First name"]', 'Test');
    await page.fill('input[placeholder="Last name"]', 'User');
    await page.fill('input[placeholder="(404) 555-0123"]', '4045551234');
    await page.fill('input[placeholder="name@example.com"]', 'test@example.com');

    // Select best time
    await page.selectOption('select', 'Morning (8am - 12pm)');

    // Select preference
    await page.click('button:has-text("Phone call")');
    await page.waitForTimeout(200);

    // Check consent
    await page.click('label:has-text("I agree that AmeriCare")');

    // Submit
    await page.click('button:has-text("Request My Callback")');

    // Should redirect to confirmation
    await page.waitForURL('**/speak-with-coordinator/confirmation', { timeout: 10000 });
    await expect(page.locator('h1')).toContainText('Callback requested');
  });
});

test.describe('Navigation CTAs', () => {
  test('hero has both CTA buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a:has-text("Check Care Options")').first()).toBeVisible();
    await expect(page.locator('a:has-text("Speak with Coordinator")').first()).toBeVisible();
  });

  test('nav has both CTA buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav >> a:has-text("Check Care Options")')).toBeVisible();
    await expect(page.locator('nav >> a:has-text("Speak with Coordinator")')).toBeVisible();
  });
});

test.describe('Confirmation Pages', () => {
  test('care path confirmation page renders', async ({ page }) => {
    await page.goto('/check-care-options/confirmation');
    await expect(page.locator('h1')).toContainText('AmeriCare received your request');
    await expect(page.locator('a:has-text("Call (404) 494-2187")')).toBeVisible();
    await expect(page.locator('a:has-text("Return Home")')).toBeVisible();
  });

  test('coordinator confirmation page renders', async ({ page }) => {
    await page.goto('/speak-with-coordinator/confirmation');
    await expect(page.locator('h1')).toContainText('Callback requested');
    await expect(page.locator('a:has-text("Call (404) 494-2187")')).toBeVisible();
  });
});
