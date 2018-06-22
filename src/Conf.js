exports.config = {
 directConnect: true,
  //The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
framework: 'jasmine',

  //Specify the name of the specs files.
  specs: ['app/app.component.spec.ts'],
  
  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      onComplete: null,
      isVerbose: false,
      showColors: true,
      includeStackTrace: true
  }
};