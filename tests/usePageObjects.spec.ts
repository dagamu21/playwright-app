import {test, expect} from '@playwright/test'
import {faker} from  '@faker-js/faker'
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async ({page}) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('parametrized methods', async ({page}) =>{ 
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(100)}@test.com`

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', '123', 'Option 1')
    await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
    await page.locator('nb-card', {hasText: 'Inline form'}).screenshot({path: 'screenshots/InLineForm.png'})
    await pm.navigateTo().datePickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(1)
    await pm.onDatePickerPage().selectRangeDatePickerFromToday(1,3)

})