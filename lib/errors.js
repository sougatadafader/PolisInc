'use strict';

const elv = require('elv');

function ExpressionParserError(msg) {
  Error.call(this);
  Error.captureStackTrace(this, ExpressionParserError);
  this.message = elv.coalesce(msg, 'Invalid expression');
}
ExpressionParserError.prototype = Object.create(Error.prototype);
ExpressionParserError.prototype.constructor = ExpressionParserError;
console.log("Arjun")


module.exports = {
  ExpressionParserError: ExpressionParserError
};
