import * as algs from '../src/index';

const array = new algs.SinglyList()
  .add([1, 3, 2])
  .searchNodeAt(1)
  .data;

const array2 = new algs.DoublyList()
  .add([4, 6, 5])
  .searchNodeAt(1)
  .data;

test('index', () => {
  expect(algs.quickSort(array)).toEqual([1, 2, 3]);
  expect(algs.bubbleSort(array2)).toEqual([4, 5, 6]);
});
