// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const calculatorInput = { a: 2, b: 5, action: Action.Add }
    const result = simpleCalculator(calculatorInput);
    expect(result).toBe(7);
  });

  test('should subtract two numbers', () => {
    const calculatorInput = { a: 2, b: 5, action: Action.Subtract }
    const result = simpleCalculator(calculatorInput);
    expect(result).toBe(-3);
  });

  test('should multiply two numbers', () => {
    const calculatorInput = { a: 2, b: 5, action: Action.Multiply }
    const result = simpleCalculator(calculatorInput);
    expect(result).toBe(10);
  });

  test('should divide two numbers', () => {
    const calculatorInput = { a: 2, b: 5, action: Action.Divide }
    const result = simpleCalculator(calculatorInput);
    expect(result).toBe(0.4);
  });

  test('should exponentiate two numbers', () => {
    const calculatorInput = { a: 2, b: 5, action: Action.Exponentiate }
    const result = simpleCalculator(calculatorInput);
    expect(result).toBe(32);
  });

  test('should return null for invalid action', () => {
    const calculatorInput = { a: 2, b: 'a', action: Action.Add }
    const result = simpleCalculator(calculatorInput);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const calculatorInput = { a: 2, b: 5, action: '%' }
    const result = simpleCalculator(calculatorInput);
    expect(result).toBeNull();
  });
});
