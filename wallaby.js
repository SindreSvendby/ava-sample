module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.js',
      '!app/**/*.test.js'
    ],

    tests: [
      'app/**/*.test.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'ava',

    setup: function () {
      require('babel-polyfill');
    },

    debug: true
  };
};
