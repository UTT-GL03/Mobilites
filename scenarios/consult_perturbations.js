const visit = async (page) => {
  await page.goto('', {
      waitUntil: 'networkidle',
  });
  await page.click('a[href="/perturbations"]');
  await page.waitForSelector('.filtre');
  await page.waitForTimeout(3000);
  await page.click('input[value="a-venir"]');
  await page.waitForTimeout(3000);
  await page.click('input[value="en-cours"]');
  await page.waitForNetworkIdle();
  await page.waitForTimeout(3000);
};

module.exports = visit;
