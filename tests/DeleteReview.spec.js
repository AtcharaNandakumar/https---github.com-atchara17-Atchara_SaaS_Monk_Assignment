const {test, expect} = require('@playwright/test');


test('DeleteReview', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
  
    //Navigate to the url

  await page.goto('https://movie-reviews-psi.vercel.app/');
 
  //Add a new review

 await page.getByText('King Kong').click(); 
 await page.locator('xpath=//html/body/main/section/div/div[2]/div/button[2]').click();


 await page.waitForTimeout(2000);

expect(await page.getByText('Review Deleted'));


  await context.close();
await browser.close();
});