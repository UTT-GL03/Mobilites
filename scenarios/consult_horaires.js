const visit = async (page) => {
  await page.goto('', {
      waitUntil: 'networkidle',
  });
  await page.click('a[href="/lignes"]');
  await page.waitForSelector('.grid');
  await page.waitForTimeout(3000);
  await page.click('a[href="/ligne/1"]');
  await page.waitForSelector('table');
  await page.scrollToEnd();
  await page.waitForTimeout(3000);
  await page.click('a[href="/lignes"]');
  await page.waitForSelector('.grid');
  await page.waitForTimeout(3000);
  await page.click('a[href="/ligne/2"]');
  await page.waitForSelector('table');
  await page.scrollToEnd();
  await page.waitForNetworkIdle();
  await page.waitForTimeout(3000);
};

module.exports = visit;
