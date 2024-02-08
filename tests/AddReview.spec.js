const {test, expect} = require('@playwright/test');


test('AddReview', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
  
    //Navigate to the url

  await page.goto('https://movie-reviews-psi.vercel.app/');
 
  //Add a new review
  await page.getByText('Add new review').click();

 
  await page.locator("#movie").selectOption('clscw03bh0002nslfl2abifc2');
  await page.locator('#name').fill('Mee');
  await page.locator('#rating').fill('8');
  await page.locator('#review').fill('Good')
  await page.waitForTimeout(3000);
  await page.getByText('Create Review').click();

  await context.close();
await browser.close();
});