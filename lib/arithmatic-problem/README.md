# Polis Interview Take-home Project

##### Table of Contents

  * [Overview](#overview)
  * [Instructions](#instructions)
  * [Supported Functionality](#supported-functionality)
  * [Approaches](#approaches)
  * [Help](#help)

## Overview

A JavaScript and Node.js-based arithmetic problem solver.

The goal of this project is to take string representations of simple arithmetic expressions, such as `2 + 2`, and do one of two things:

  1. Parse the string, and return an in-order array of tokens.  Tokens in this case are the terms and operators that make up the expression.

  2. Solve the expression.

## Instructions

The goal of this project is to complete the missing portions of code, and satisfy all of the unit tests found in the `tests/unit/arithmatic-problem` directory.  It is recommend you peruse the requirements listed in the [Supported Functionality](#supported-functionality) section, and read over the tests found in the unit tests directory.

From there, take a look at `lib/expression.js`.  This is where you'll find the method stubs you'll need to fill out.  You can structure this or any file anyway you wish as long as you ensure `lib/expression.js` exports with a `solve()` method; as, the unit tests expect it to exist.  The `solve()` method will have the following signature:

  * Arity of 1.
  * Accepts a string type argument.
  * Returns a numeric.

## Supported Functionality

The high level requirements for this project are:

  * Parse well-formed arithmetic expressions into terms.
  * Terms are either a numeric value, or an operation to perform.
  * Numeric terms can be integers.
  * Supported operations include: add (`+`), subtract (`-`), multiple (`*`), and divide (`/`).
  * There can be an unlimited number of terms.
  * Solve must respect order of operations.
  * Malformed expressions must result in an error.
  * Solve well-formed arithmetic expressions.
  * Solve can only accept string values.
  * Arrays of tokens that translate into malformed expressions must result in an error.

### Optional Functionality

The following are not required to complete this project.  However, if you feel they are necessary for a complete implementation, then you will not be penalized for adding this functionality.

  * Support for negative numeric values.
  * Support for floating points.
  * Support for non-decimal numeral systems, such as hexadecimal.

## Approaches

There are a variety of ways to solve this particular problem.  The methods and patterns that should be employed is entirely up to you.  All we ask is that you not remove or modify the existing unit tests, but feel free to add more unit tests if you feel there is something missing.  Additionally, the use of the `eval()` function is prohibited.

This project is designed to be solvable with a couple of hours of work.  We recognize that there are elaborate, highly-performant patterns one can employ that might take a day's worth of work to complete.  It is not necessary to put that level of effort into this project, as just getting a working solution is typically what is important.  Though, if you wanted to create an elaborate parser and concrete syntax tree we won't discourage you, or penalize you if you choose to go with the quick and dirty solution.

The goal is for us to get a sense of how you think and solve problems, and for you to have fun.

## Help

If at any time you get stuck, have questions about requirements, or have issues installing the prerequisites, please do not hesitate to reach out.  Ultimately, Polis want you to succeed.  If you have any questions, you can contact me any time via email at __ndaba@polisapp.com__.

Cheers,

__Ndaba Ndebele__, _Software Engineer, Polis_
