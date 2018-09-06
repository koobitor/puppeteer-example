'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1200,height: 900});
  await page.goto('https://www.medvine.co');
  setTimeout(async () => {
    await page.screenshot({path: 'extra-large-devices.png'});
    await page.setViewport({width: 992,height: 768});
    await page.goto('https://www.medvine.co');
    setTimeout(async () => {
      await page.screenshot({path: 'large-devices.png'});
      await browser.close();
    },5000)
  },5000)
})();