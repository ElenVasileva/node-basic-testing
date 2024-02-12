// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 'q', b: 2, action: Action.Add, expected: null },
  { a: 2, b: 'a', action: Action.Add, expected: null },
  { a: 3, b: 2, action: 'Action.Add', expected: null },

  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },

  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },

  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },

  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },

  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
];

describe('simpleCalculator', () => {
  test.each(testCases)('should check arguments and add, subtract, multiply, divide and exponentiate two numbers', (testCase) => {
    expect(simpleCalculator(testCase)).toBe(testCase.expected);
  });
});
