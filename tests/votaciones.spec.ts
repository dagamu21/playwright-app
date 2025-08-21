import { OverlayPositionBuilder } from '@angular/cdk/overlay'
import { getLocaleNumberSymbol } from '@angular/common'
import {test, expect} from '@playwright/test'
import { operators } from 'rxjs-compat'
import { getSymbolIterator } from 'rxjs/internal/symbol/iterator'
import { DialogComponent } from '../src/app/pages/modal-overlays/dialog/dialog.component'
import { NB_AUTH_USER_OPTIONS } from '@nebular/auth'
import { delay } from 'rxjs-compat/operator/delay'
import { sign } from 'crypto'
import { Value } from 'sass'

test.beforeEach(async({page}) => {
    await page.goto('https://www.lacasadelosfamososmexico.tv/vota-vix')

    const frame = page.frameLocator('#iframeVix')
    //await page.waitForTimeout(5000)
    const email = frame.getByPlaceholder('ejemplo@email.com')
    const password = frame.getByPlaceholder('Contraseña')


    await email.fill('pabq91@gmail.com')
    await password.fill('T3mp0r4l!')
    await frame.getByRole('button', {name: 'Iniciar sesión'}).click()
})



test('vota alexis', async({page}) => {
    

    const frame2 = page.frameLocator('#iframeMain')

    const ninel = frame2.locator('[class="answer-text flex-center flex-auto row ng-binding"]', {hasText:'ALEXIS AYALA'})

    for(let i = 0; i<10; i++){
        await ninel.click()
        await page.waitForTimeout(5500)
    }
    
})

test('vota mar', async({page}) => {
    

    const frame2 = page.frameLocator('#iframeMain')

    const ninel = frame2.locator('[class="answer-text flex-center flex-auto row ng-binding"]', {hasText:'MAR CONTRERAS'})

    for(let i = 0; i<10; i++){
        await ninel.click()
        await page.waitForTimeout(5500)
    }
    
})

test('vota dalila', async({page}) => {
    

    const frame2 = page.frameLocator('#iframeMain')

    const ninel = frame2.locator('[class="answer-text flex-center flex-auto row ng-binding"]', {hasText:'FACUNDO'})

    for(let i = 0; i<10; i++){
        await ninel.click()
        await page.waitForTimeout(5500)
    }
    
})