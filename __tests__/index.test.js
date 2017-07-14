import * as algs from '../src/index';

test('index', () => {
  expect(algs.quicksort([1, 3, 2])).toEqual([1, 2, 3]);
  expect(algs.bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
});
