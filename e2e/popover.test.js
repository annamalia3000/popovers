import puppeteer from 'puppeteer';

jest.setTimeout(30000); 

describe('Show button', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false, 
            slowMo: 250,
            devtools: true, 
        });

        page = await browser.newPage();
    });

    afterAll(async () => {
        if (browser) {
            await browser.close;
        }
    });

    test('should show tooltip when button is clicked', async ()=>  {
        await page.goto(baseUrl);
        await page.waitForSelector('.btn');

        const submit = await page.$('.btn');
        await submit.click();

        await page.waitForSelector('.tooltip');

        const tooltipVisible = await page.$('.tooltip') !== null;

        expect(tooltipVisible).toBe(true);
    });
});