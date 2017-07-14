import bubbleSort from '../src/algorithms/sort/bubble-sort';

test('bubble-sort', () => {
  expect(bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
  expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  expect(bubbleSort([45, 0, 4.5, 77, 2, 0, 838, 7])).toEqual([0, 0, 2, 4.5, 7, 45, 77, 838]);
  expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort(['a', 'b', 'd', 'c', 'f', 'g', 'e', 'z'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'z']);
});
