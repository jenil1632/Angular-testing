// describe('Protractor Demo App', function() {
//   it('should have a title', async function() {
//     await browser.get('http://juliemr.github.io/protractor-demo/');
//    const title = await browser.getTitle();
//     expect(title).toEqual('Super Calculator');
//   });
//
//   it('should add one and two', async function() {
//     await browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(1);
//     element(by.model('second')).sendKeys(2);
//
//     element(by.id('gobutton')).click();
//
//     expect(element(by.binding('latest')).getText()).
//         toEqual('5'); // This is wrong!
//   });
// });

describe('Protractor Demo App', function() {

  beforeEach( async function() {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', async function() {
    const title = await browser.getTitle();
     expect(title).toEqual('Super Calculator');
  });

  // it('should add one and two', async function() {
  //   var firstNumber = await element(by.model('first'));
  //   var secondNumber = await element(by.model('second'));
  //     var goButton = await element(by.id('gobutton'))
  //   firstNumber.sendKeys(1);
  //   secondNumber.sendKeys(2);
  //   goButton.click();
  //              var latestResult = await element(by.binding('latest')).getText();
  //   expect(latestResult).toEqual('3');
  // });

  // it('should add four and six', async function() {
  //   // Fill this in.
  //     var latestResult = await element(by.binding('latest'));
  //   expect(latestResult.getText()).toEqual('10');
  // });

  // it('should read the value from an input', async function() {
  //     var firstNumber = await element(by.model('first'));
  //   firstNumber.sendKeys(1);
  //   expect(firstNumber.getAttribute('value')).toEqual('1');
  // });
});
