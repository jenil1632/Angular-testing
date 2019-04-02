exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://selenium-hub-selenium-project.7e14.starter-us-west-2.openshiftapps.com/wd/hub',
  specs: ['todo_spec.js'],
  SELENIUM_PROMISE_MANAGER: false
}
