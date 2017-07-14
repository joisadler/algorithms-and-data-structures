import quickSort from '../src/algorithms/sort/quicksort';

test('bubble-sort', () => {
  expect(quickSort([1, 3, 2])).toEqual([1, 2, 3]);
  expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  expect(quickSort([45, 0, 4.5, 77, 2, 0, 838, 7])).toEqual([0, 0, 2, 4.5, 7, 45, 77, 838]);
  expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(quickSort(['a', 'b', 'd', 'c', 'f', 'g', 'e', 'z'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'z']);
});
