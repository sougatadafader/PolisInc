
# Polis optional interview take home question

## Overview

A JavaScript and Node.js based arithmatic problem solver. 

The goald of this project is to find the number of ways that an integer `X` can be expressed as a sum of unique integers raised to `Nth` power.

## Instructions

The goal of this project is to complete the missing portion of code, and satisfy all of the unit tests found in the `tests/unit/power-problem` directory. 

From there, take a look at `lib/expression.js`.  This is where you'll find the method stubs you'll need to fill out.  You can structure this or any file anyway you wish as long as you ensure `lib/expression.js` exports with a `solve()` method; as, the unit tests expect it to exist.  The `solve()` method will have the following signature:

  * Arity of 2 (X, N).
  * Returns a numeric.

### Constraints
1 <= X <= 1000
2 <= N <= 10

### Output Format

A single integer that is the solution to the problem.

### Examples

#### Example 0.

Input
```
solve(10, 2)
```

Output
```
1
```

Explanation

X = 10 and N = 2, we need to find the number of ways that 10 can be represented. 

10 = 1^2 + 3^2


#### Example 1.

Input

```
solve(100, 3)
```
Output

```
1
```

Explanation

X = 100 and N = 3, we need to find the number of ways that 100 can be represented.
100 = 1^3 + 2^3 + 3 ^ 3 + 4 ^3 = (1 + 8 +27 + 64). There is no other way to express 100 as sum of cubes.

## Help

If at any time you get stuck, have questions about requirements, or have issues installing the prerequisites, please do not hesitate to reach out.  Ultimately, Polis want you to succeed.  If you have any questions, you can contact me any time via email at __ndaba@polisapp.com__.

Cheers,

__Ndaba Ndebele__, _Software Engineer, Polis_
