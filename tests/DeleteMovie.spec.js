const {test, expect} = require('@playwright/test');


test('DeleteReview', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
  
    //Navigate to the url

  await page.goto('https://movie-reviews-psi.vercel.app/');
 
  //Add a new review

 await page.locator('xpath=//html/body/main/section[2]/div[2]/div/button[2]').click(); 
 await page.waitForTimeout(2000);
expect(await page.getByText('Successfully Deleted'));


  await context.close();
await browser.close();
});