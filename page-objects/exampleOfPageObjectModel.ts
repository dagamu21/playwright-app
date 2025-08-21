import { Locator, Page } from "@playwright/test";

export class NavigationPage{
    readonly page: Page
    readonly formLayoutsItem: Locator
    readonly datePickerItem: Locator
    readonly smartTableItem: Locator
    readonly toastrItem: Locator
    readonly tooltipItem: Locator

    constructor (page: Page){
        this.page = page
        this.formLayoutsItem = page.getByText('Form Layouts')
        this.datePickerItem = page.getByText('Datepicker')
        this.smartTableItem = page.getByText('Smart Table')
        this.toastrItem = page.getByText('Toastr')
        this.tooltipItem = page.getByText('Tooltip')    
    }
    async formLayoutsPage(){
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsItem.click()
    }    

    async datePickerPage (){
        await this.selectGroupMenuItem('Forms')
        await this.datePickerItem.click()
    }

    async smartTablePage (){
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableItem.click()
    }

    async toastrPage (){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrItem.click()
    }

    async tooltipPage (){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipItem.click()
    }

    private async selectGroupMenuItem (groupitemtitle: string){
        const groupMenuItem = this.page.getByTitle(groupitemtitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == 'false')
            await groupMenuItem.click()
    }
}


