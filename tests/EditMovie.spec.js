const {test, expect} = require('@playwright/test');


test('EditMovie', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
  
    //Navigate to the url

  await page.goto('https://movie-reviews-psi.vercel.app/');
 
  await page.locator('xpath=//html/body/main/section[2]/div/div/button[1]').nth(0).click();
  
  await page.waitForTimeout(3000);
  
  await page.getByText('Update Movie').click();
  await context.close();
await browser.close();
});