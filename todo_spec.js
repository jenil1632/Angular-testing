describe('Protractor Demo App', function() {
  it('should have a title', async function() {
    await browser.get('http://juliemr.github.io/protractor-demo/');
   const title = await browser.getTitle();
    expect(title).toEqual('Super Calculator');
  });
});
