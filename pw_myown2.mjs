import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');


(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.grove.kutc.kansai-u.ac.jp/takatsuki/test.html');
    
    for (let i = 1; i <= 7; i++) {

        const inputformpass = `body > table:nth-child(4) > tbody > tr:nth-child(${i}) > td > input[type=textbox]`

        const inputvariable = `sample${i}`

        const inputform = `${inputvariable}`

        await page.locator(inputformpass).fill(inputform);
    }


    // await page.locator('body > table:nth-child(4) > tbody > tr:nth-child(1) > td > input[type=textbox]').fill(sample1);
    // await page.locator('body > table:nth-child(4) > tbody > tr:nth-child(2) > td > input[type=textbox]').fill(sample2);
    // await page.locator('body > table:nth-child(4) > tbody > tr:nth-child(3) > td > input[type=textbox]').fill(sample3);
    // await page.locator('body > table:nth-child(4) > tbody > tr:nth-child(4) > td > input[type=textbox]').fill(sample4);
    // await page.locator('body > table:nth-child(4) > tbody > tr:nth-child(5) > td > input[type=textbox]').fill(sample5);
    // await page.locator('body > table:nth-child(4) > tbody > tr:nth-child(6) > td > input[type=textbox]').fill(sample6);
    // await page.locator('body > table:nth-child(4) > tbody > tr:nth-child(7) > td > input[type=textbox]').fill(sample7);

    for (let i = 2; i <= 57; i++) {
        const selector = `body > table:nth-child(5) > tbody > tr:nth-child(${i}) > td:nth-child(3) > select`;
        await page.selectOption(selector, "YES");
      }

    // await page.selectOption("body > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(3) > select", "YES");
    // await page.selectOption("body > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > select", "YES");
    // await page.selectOption("body > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > select", "YES");
    // await page.selectOption("body > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > select", "YES");
    // await page.selectOption("body > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > select", "YES");
    // await page.selectOption("body > table:nth-child(5) > tbody > tr:nth-child(7) > td:nth-child(3) > select", "YES");...
    
    await page.screenshot({path: './test.png', fullPage: true });
    await browser.close();
})();

const sample1 = "あ"//被監査部局〇〇部
const sample2 = "い"//〇〇課
const sample3 = "う"//システム管理者名
const sample4 = "え"//システム名
const sample5 = "お"//文書番号
const sample6 = "か"//記入日
const sample7 = "き"//記入担当者