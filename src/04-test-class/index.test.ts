import lodash from 'lodash';

import { getBankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError, BankAccount } from '.';

jest.mock('lodash');

const initialBalance = 1000
const tooMuchToWithdraw = 2000
const acceptableToWithdraw = 200

describe('BankAccount', () => {

  let account: BankAccount

  beforeEach(() => {
    account = getBankAccount(initialBalance)
  });

  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(initialBalance)
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => {
      account.withdraw(tooMuchToWithdraw);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const fromAccount = account
    const destAccount = getBankAccount(initialBalance)
    expect(() => {
      fromAccount.transfer(tooMuchToWithdraw, destAccount)
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const fromAccount = account
    expect(() => {
      fromAccount.transfer(acceptableToWithdraw, fromAccount);
    }).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    expect(account.deposit(acceptableToWithdraw).getBalance()).toBe(initialBalance + acceptableToWithdraw);
  });

  test('should withdraw money', () => {
    expect(account.withdraw(acceptableToWithdraw).getBalance()).toBe(initialBalance - acceptableToWithdraw);
  });

  test('should transfer money', () => {
    const fromAccount = account
    const destAccount = getBankAccount(initialBalance)
    fromAccount.transfer(acceptableToWithdraw, destAccount);
    expect(fromAccount.getBalance()).toBe(initialBalance - acceptableToWithdraw);
    expect(destAccount.getBalance()).toBe(initialBalance + acceptableToWithdraw);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    (lodash.random as jest.Mock).mockReturnValue(1)
    const balance = await account.fetchBalance()
    expect(typeof balance).toBe('number')
  });

  test('should set new balance if fetchBalance returned number', async () => {
    (lodash.random as jest.Mock).mockReturnValue(1)
    await account.synchronizeBalance()
    expect(account.getBalance()).toBeLessThan(initialBalance)

  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    (lodash.random as jest.Mock).mockReturnValue(0)
    await expect(account.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
