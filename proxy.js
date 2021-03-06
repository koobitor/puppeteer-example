'use strict';

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({
    // Launch chromium using a proxy server on port 9876.
    // More on proxying:
    //    https://www.chromium.org/developers/design-documents/network-settings
    args: [ '--proxy-server=127.0.0.1:9876' ]
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await browser.close();
})();