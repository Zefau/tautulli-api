/**
 * @description Testing Your Style With ESLint and Mocha
 * @author Blake Williams
 * @date May 4, 2016 updated on March 23, 2019 
 * @see https://thoughtbot.com/blog/testing-your-style-with-eslint-and-mocha
 *
 */
let glob = require('glob');
let CLIEngine = require('eslint').CLIEngine;
let assert = require('chai').assert;

const paths = glob.sync('./+(lib|test)/**/*.js');
const engine = new CLIEngine({
  envs: ['node', 'mocha'],
  useEslintrc: true,
});

const results = engine.executeOnFiles(paths).results;

describe('ESLint', function() {
  results.forEach((result) => generateTest(result));
});

function generateTest(result) {
  const { filePath, messages } = result;

  it(`validates ${filePath}`, function() {
    if (messages.length > 0) {
      assert.fail(false, true, formatMessages(messages));
    }
  });
}

function formatMessages(messages) {
  const errors = messages.map((message) => {
    return `${message.line}:${message.column} ${message.message.slice(0, -1)} - ${message.ruleId}\n`;
  });

  return `\n${errors.join('')}`;
}