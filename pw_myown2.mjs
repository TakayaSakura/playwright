import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');


(async () => {

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.grove.kutc.kansai-u.ac.jp/takatsuki/test.html');

    for (let i = 1; i <= 7; i++) {
        const inputformpass = `body > table:nth-child(4) > tbody > tr:nth-child(${i}) > td > input[type=textbox]`
        const inputformvariable = `input${i}`
        const inputform = eval(inputformvariable);
        await page.locator(inputformpass).fill(inputform);
    }

    for (let i = 2; i <= 57; i++) {
        const selector = `body > table:nth-child(5) > tbody > tr:nth-child(${i}) > td:nth-child(3) > select`;
        await page.selectOption(selector, "YES");
    }

    await page.screenshot({path: './test.png', fullPage: true }); //ページ全体のスクリーンショットを撮影します（必要に応じてコメントアウトしてください）

    await page.locator('body > form > input[type=submit]').click(); //送信ボタンをクリックします（必要に応じてコメントアウトしてください）

    await browser.close();

})();

const input1 = "a"//被監査部局〇〇部
const input2 = "b"//〇〇課
const input3 = "c"//システム管理者名
const input4 = "d"//システム名
const input5 = "e"//文書番号
const input6 = "f"//記入日
const input7 = "g"//記入担当者

///////////////////////////////////////////////////////////
//主に24行目，26行目，32~38行目を必要に応じて操作してください//
//他の行において変更が必要である場合は他の行も操作してください//
//////////////////////////////////////////////////////////