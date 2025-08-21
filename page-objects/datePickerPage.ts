import {test, expect, Page} from '@playwright/test'
import { start } from 'repl'
import { HelperBase } from './helperBase'

export class DatePickerPage extends HelperBase{

    constructor (page:Page){
        super(page)
    }

    async selectCommonDatePickerDateFromToday (numberOfDaysFromToday: number){
        const calendarInput = this.page.getByPlaceholder('Form Picker')
        await calendarInput.click()
        const dateToAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday)
        await expect(calendarInput).toHaveValue(dateToAssert)
    }

    async selectRangeDatePickerFromToday (startDate: number, endDate: number){
        const calendarInput = this.page.getByPlaceholder('Range Picker')
        await calendarInput.click()
        const dateToAssertStart = await this.selectDateInTheCalendar(startDate)
        const dateToAssertEnd = await this.selectDateInTheCalendar(endDate)
        const dateToAssertRange = `${dateToAssertStart} - ${dateToAssertEnd}`
        await expect(calendarInput).toHaveValue(dateToAssertRange)


}
    private async selectDateInTheCalendar(numberOfDaysFromToday: number){
        let date = new Date()
        date.setDate(date.getDate() + numberOfDaysFromToday)

        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleDateString('EN-US', {month: 'short'})
        const expectedMonthLong = date.toLocaleDateString('EN-US', {month: 'long'})
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        let calendarMonthYeat = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear} `
        while(!calendarMonthYeat.includes(expectedMonthAndYear)){
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendarMonthYeat = await this.page.locator('nb-calendar-view-mode').textContent()

        }

        await this.page.locator('.day-cell.ng-star-inserted:not(.bounding-month)').getByText(expectedDate, { exact: true }).click();
        return dateToAssert
        }
}