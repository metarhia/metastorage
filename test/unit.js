'use strict';

const metatests = require('metatests');
const metastorage = require('..');

metatests.test('Test', async (test) => {
  test.strictSame(typeof metastorage, 'object');
  test.end();
});
