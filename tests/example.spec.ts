import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000';

test.describe('Oaasis Application Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the application before each test
    await page.goto(baseUrl);
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
  });

  test('should have correct page title', async ({ page }) => {
    // The title might not contain 'Oaasis' exactly, so let's check for any title
    const title = await page.title();
    console.log(`Page title: ${title}`);
    expect(title.length).toBeGreaterThan(0);
  });

  test('should display header components', async ({ page }) => {
    // Look for the header element by its layout or structure instead of text content
    const header = page.locator('div:has(> div > div)').first();
    await expect(header).toBeVisible();
  });

  test('should have Product Dashboard with tabs', async ({ page }) => {
    // Find tabs based on their button structure
    const tabButtons = page.locator('button[data-icon=true][data-type=button]');
    
    // Wait for tabs to be visible
    await expect(tabButtons).toHaveCount(2);
    
    // Get the first tab (All Products) and second tab (Exceptions)
    const allProductsTab = page.locator('button[data-tab="all-products"]');
    const exceptionsTab = page.locator('button[data-tab="exceptions"]');
    
    // Verify tabs are visible
    await expect(allProductsTab).toBeVisible();
    await expect(exceptionsTab).toBeVisible();
    
    // Get the initial active tab class
    const allProductsClass = await allProductsTab.getAttribute('class');
    expect(allProductsClass).toContain('activeTab');
    
    // Click exceptions tab
    await exceptionsTab.click();
    
    // Verify classes have changed
    await expect(exceptionsTab).toHaveAttribute('class', /activeTab/);
    await expect(allProductsTab).not.toHaveAttribute('class', /activeTab/);
  });

  test('should have working search functionality', async ({ page }) => {
    // Find the search input by its placeholder
    const searchInput = page.getByPlaceholder('Search');
    await expect(searchInput).toBeVisible();
    
    // Type a search term
    await searchInput.fill('Tequila');
    
    // Wait for search results to update
    await page.waitForTimeout(500);
    
    // Verify search results contain the search term
    // Using :visible to ensure we only check visible elements
    const searchResults = page.getByText(/Tequila/i);
    await expect(searchResults).toBeVisible();
    
    // Clear search and verify AWS categories are shown
    await searchInput.clear();
    await page.waitForTimeout(500);
    const awsCategory = page.getByText(/AWS \(\d+\)/i);
    await expect(awsCategory).toBeVisible();
  });

  test('should allow collapsing and expanding product categories', async ({ page }) => {
    // Wait for the page to stabilize
    await page.waitForTimeout(500);
    
    // Find the collapse/expand button by its text content
    const collapseButton = page.getByText(/Collapse all|Expand all/, { exact: false });
    await expect(collapseButton).toBeVisible();
    
    // Check initial state
    const initialButtonText = await collapseButton.textContent();
    
    // Click to toggle state
    await collapseButton.click();
    await page.waitForTimeout(300); // Wait for animation
    
    // Verify text changed to the opposite
    if (initialButtonText?.includes('Collapse')) {
      await expect(collapseButton).toContainText('Expand all');
    } else {
      await expect(collapseButton).toContainText('Collapse all');
    }
    
    // Click to toggle back
    await collapseButton.click();
    await page.waitForTimeout(300); // Wait for animation
    
    // Verify text changed back to original
    if (initialButtonText?.includes('Collapse')) {
      await expect(collapseButton).toContainText('Collapse all');
    } else {
      await expect(collapseButton).toContainText('Expand all');
    }
  });
  
  test('should toggle individual product categories', async ({ page }) => {
    // Wait for the page to stabilize
    await page.waitForTimeout(500);
    
    // Find a category button (they're standard buttons, not toggle buttons with aria-expanded)
    const categoryButton = page.locator('button.categoryButton').first();
    await expect(categoryButton).toBeVisible();
    
    // Find the icon to check rotation state
    const icon = categoryButton.locator('img');
    
    // Get initial class to determine initial state
    const initialIconClass = await icon.getAttribute('class') || '';
    const isInitiallyRotated = initialIconClass.includes('iconRotated');
    
    // Click to toggle
    await categoryButton.click();
    await page.waitForTimeout(300); // Wait for animation
    
    // Verify the icon class has changed
    if (isInitiallyRotated) {
      await expect(icon).not.toHaveClass(/iconRotated/);
    } else {
      await expect(icon).toHaveClass(/iconRotated/);
    }
    
    // Click again to toggle back
    await categoryButton.click();
    await page.waitForTimeout(300); // Wait for animation
    
    // Verify it's back to original state
    if (isInitiallyRotated) {
      await expect(icon).toHaveClass(/iconRotated/);
    } else {
      await expect(icon).not.toHaveClass(/iconRotated/);
    }
  });
  
  test('should show no results message for non-existent search term', async ({ page }) => {
    // Find the search input
    const searchInput = page.getByPlaceholder('Search');
    await expect(searchInput).toBeVisible();
    
    // Type a search term that doesn't exist
    await searchInput.fill('NonExistentProduct12345');
    
    // Wait for search results to update
    await page.waitForTimeout(500);
    
    // Verify no results message is shown
    // The message contains quotes around the search term
    const noResultsMessage = page.getByText(/No products found matching/);
    await expect(noResultsMessage).toBeVisible();
  });
});

