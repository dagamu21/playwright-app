import {test, expect} from '@playwright/test'
import { timeout } from 'rxjs-compat/operator/timeout'

test.beforeEach(async({page})=>{
    await page.goto(process.env.URL)
    await page.locator('#ajaxButton').click()
})

test('auto waiting', async({page}) => {
    const successButton = page.locator('.bg-success')

    // await successButton.click()

    // const text = await successButton.textContent()

    // await successButton .waitFor({state: 'attached'})
    // const text = await successButton.allTextContents()
  
    
    // expect(text).toContain('Data loaded with AJAX get request.')

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test.skip('alternatives waits', async ({page}) => {
    const successButton = page.locator('.bg-success')

    //___ wait for element
    //await page.waitForSelector('.bg-success')

    //___ wait for specific response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait for network calls to be completed
    await page.waitForLoadState('networkidle')


    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

test.skip('timeouts', async ({page}) => {

    //test.slow() // 3 times slower
    const successButton = page.locator('.bg-success')
    await page.waitForSelector('.bg-success')

})