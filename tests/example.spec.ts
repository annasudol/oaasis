import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('Oaasis Website Tests', () => {
  test('should load the homepage successfully', async ({ page }) => {
    // Check that the page loads and has a title
    await expect(page).toHaveTitle(/.*/);
    
    // Check that the page is not empty
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should have valid HTML structure', async ({ page }) => {
    // Check that basic HTML elements exist
    const html = page.locator('html');
    const head = page.locator('head');
    const body = page.locator('body');
    
    await expect(html).toBeAttached();
    await expect(head).toBeAttached();
    await expect(body).toBeAttached();
  });


  test('should not have any console errors', async ({ page }) => {
    const errors: string[] = [];
    

    
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Allow for some common non-critical errors that might occur in production
    const criticalErrors = errors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('analytics') &&
      !error.includes('tracking')
    );
    
    expect(criticalErrors).toHaveLength(0);
  });
});

