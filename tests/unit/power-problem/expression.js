'use strict';

const assert = require('chai').assert;

const errors = require('../../../lib/errors');
const expression = require('../../../lib/power-problem/expression');

describe('POWER PROBLEM', () => {

  describe('#solve', () => {

    it('should return 1 when X = 10 and N = 2', () => {
      const result = expression.solve(10, 2);
      assert.strictEqual(result, 1);
    });

    it('should return 1 when X = 100 and N = 2', () => {
      const result = expression.solve(100, 2);
      assert.strictEqual(result, 3);
    });

    it('should return 1 when X = 100 and N = 3', () => {
      const result = expression.solve(100, 3);
      assert.strictEqual(result, 1);
    });
  });
});
