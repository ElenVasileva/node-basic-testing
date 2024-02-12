import { generateLinkedList, } from './index';


const from = [1, 2, 3, 4]
const list = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: null, next: null } } } } }

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    expect(generateLinkedList(from)).toStrictEqual(list)
  });

  test('should generate linked list from values 2', () => {
    expect(generateLinkedList(from)).toMatchSnapshot(list)
  });
});
