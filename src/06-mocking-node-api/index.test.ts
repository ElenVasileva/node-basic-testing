// Uncomment the code below and write your tests
import path from 'path'
import { existsSync } from 'fs'
import { readFile } from 'fs/promises'
//import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import { readFileAsynchronously } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
  });

  test('should call callback only after timeout', () => {
    // Write your test here
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
  });
});

jest.mock('fs')
jest.mock('fs/promises')
jest.mock('path')
const somePath = 'some path'
const someText = 'some text'
describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    await readFileAsynchronously(somePath)
    expect(path.join).toHaveBeenCalled()
  });

  test('should return null if file does not exist', async () => {
    (existsSync as jest.Mock).mockReturnValue(false);
    (path.join as jest.Mock).mockReturnValue('');
    expect(await readFileAsynchronously(somePath)).toBeNull();
  });

  test('should return file content if file exists', async () => {
    (existsSync as jest.Mock).mockReturnValue(true);
    (readFile as jest.Mock).mockImplementation(async () => { return Buffer.from(someText) });
    expect(await readFileAsynchronously(somePath)).toBe(someText);
  });
});
