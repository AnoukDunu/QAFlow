import { test, expect } from '@playwright/test';

test('User can login', async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByTestId('username').fill('standard_user');

    await page.getByTestId('password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL(/inventory/);
});