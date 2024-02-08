const {test, expect} = require('@playwright/test');


test('AddMovie', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
  
    //Navigate to the url

  await page.goto('https://movie-reviews-psi.vercel.app/');
 
  //Add a new movie
  await page.getByText('Add new movie').click();

  //Add details

  await page.getByPlaceholder('Name').fill('King Kong');
  await page.locator('#release').fill('2024-02-08');
  
  await page.waitForTimeout(3000);
  
  await page.getByText('Create Movie').click();
  await context.close();
await browser.close();
});