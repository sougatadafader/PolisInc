'use strict';

const assert = require('chai').assert;

const errors = require('../../../lib/errors');
const expression = require('../../../lib/arithmatic-problem/expression');

describe('ARITHMATIC PROBLEM', () => {

  describe('#solve', () => {

    it('should throw if expression argument is not a string', () => {
      assert.throws(() => {
        const result = expression.solve(42);
      }, TypeError);
    });

    it('should throw if expression argument length is 0', () => {
      assert.throws(() => {
        expression.solve('');
      }, errors.ExpressionParserError);
    });

    it('should ignore space characters', () => {
      const result = expression.solve('2 +2');
      assert.strictEqual(result, 4);
    });

    it('should return a numeric', () => {
      const result = expression.solve('2 + 2');
      assert.isNumber(result);
    });

    it('should throw if operator not preceeded by numeric', () => {
      assert.throws(() => {
        const result = expression.solve('*2');
      }, errors.ExpressionParserError);
    });

    it('should throw if operator not proceeded by numeric', () => {
      assert.throws(() => {
        const result = expression.solve('2*');
      }, errors.ExpressionParserError);
    });

    it('should throw if numeric proceeded by numeric', () => {
      assert.throws(() => {
        const result = expression.solve('2 2');
      }, errors.ExpressionParserError);
    });

    it('should throw if numeric is invalid', () => {
      assert.throws(() => {
        const result = expression.solve('OHAI + 2');
      }, errors.ExpressionParserError);
    });

    it('should add', () => {
      const result = expression.solve('42 + 42');
      assert.strictEqual(result, 84);
    });

    it('should subtract', () => {
      const result = expression.solve('42 - 18');
      assert.strictEqual(result, 24);
    });

    it('should multiply', () => {
      const result = expression.solve('42 * 42');
      assert.strictEqual(result, 1764);
    });

    it('should divide', () => {
      const result = expression.solve('42 / 6');
      assert.strictEqual(result, 7);
    });

    it('should perform multiplication before addition', () => {
      const result = expression.solve('42 + 42 * 2');
      assert.strictEqual(result, 126);
    });

    it('should perform multiplication before addition', () => {
      const result = expression.solve('2 * 42 + 21');
      assert.strictEqual(result, 105);
    });

    it('should perform division before addition', () => {
      const result = expression.solve('42 + 42 / 7');
      assert.strictEqual(result, 48);
    });

    it('should perform multiplication before subtraction', () => {
      const result = expression.solve('42 - 3 * 6');
      assert.strictEqual(result, 24);
    });

    it('should perform division before subtraction', () => {
      const result = expression.solve('42 - 24 / 6');
      assert.strictEqual(result, 38);
    });

    it('should throw if numeric is invalid', () => {
      assert.throws(() => {
        const result = expression.solve('1 - (1)');
      }, errors.ExpressionParserError);
    });

    it('should throw if numeric is invalid', () => {
      assert.throws(() => {
        const result = expression.solve('0 * f');
      }, errors.ExpressionParserError);
    });

     it('should throw if numeric is invalid', () => {
      assert.throws(() => {
        const result = expression.solve('1 ÷ 4');
      }, errors.ExpressionParserError);
    });

     it('should throw if numeric proceeded by numeric', () => {
      assert.throws(() => {
        const result = expression.solve('1+2 5 +');
      }, errors.ExpressionParserError);
    });

     it('should throw if operator not proceeded by numeric', () => {
      assert.throws(() => {
        const result = expression.solve('-1 + 1');
      }, errors.ExpressionParserError);
    });
     
     it('should throw if Expression has non-numeric string', () => {
      assert.throws(() => {
        const result = expression.solve('1.1 * 2.20');
      }, errors.ExpressionParserError);
    });

  });

});
