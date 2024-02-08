const {test, expect} = require('@playwright/test');


test('SearchMovie', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
  
    //Navigate to the url

  await page.goto('https://movie-reviews-psi.vercel.app/');
 
  //Searching for a movie
  await page.getByPlaceholder('Search for your favorite movie').fill('Testing');

  //To verify if the searched element is present or not

  await page.isVisible("text='Testing'")

  await context.close();
await browser.close();
});