const GroupRunner = require('jest-runner-groups');

class NxGroupRunner extends GroupRunner {
  runTests(tests, watcher, onStart, onResult, onFailure, options) {
    if (process.argv.length === 2) {
      const config = JSON.parse(process.argv[2]);
      if (config?.overrides?.group) {
        process.argv.push(`--group=${config.overrides.group}`);
      }
    }
    return super.runTests(tests, watcher, onStart, onResult, onFailure, options);
  }
}

module.exports = NxGroupRunner;
