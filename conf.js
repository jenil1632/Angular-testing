exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo_spec.js'],
  SELENIUM_PROMISE_MANAGER: false
}
