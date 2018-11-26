const { SpecReporter } = require('jasmine-spec-reporter');

 

exports.config = {

 seleniumAddress: 'http://localhost:4444/wd/hub/',

    framework: 'jasmine',

    specs: [ 'home.spec.js' ],

    capabilities: {

      browserName: 'chrome'

    },
   jasmineNodeOpts: {

      showColors: true,

     defaultTimeoutInterval: 30000,

      print: function() {}

    },

    onPrepare() {

      jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

      browser.ignoreSynchronization = true;

    }

  }