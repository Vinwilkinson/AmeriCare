import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    channel: 'chrome',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
