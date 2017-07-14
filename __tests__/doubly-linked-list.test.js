import { isDoublyList, isDoublyNode, cycledDoublyListToStr } from '../src/data-structures/doubly-linked-list/doubly-linked-list';
import DoublyList from '../src/data-structures/doubly-linked-list/DoublyList';

const emptyList = new DoublyList();
const list1 = emptyList
  .add('Трататуськи!')
  .add('Трататусечки!')
  .add('Чирибим!')
  .add('Чирибом!')
  .remove(4)
  .add('Парам-пам-пам!');
const list2 = emptyList
  .add('Трам-пам-пам!')
  .add('Опа!');
const cycledList = list1.clone();
cycledList.searchNodeAt(4).next = cycledList.searchNodeAt(1); // create cycle

test('bubble-sort', () => {
  expect(list1.toString()).toBe('[ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам! ]');
  expect(list1.clone().toString()).toBe('[ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам! ]');
  expect(list1.clone()).not.toBe(list1);
  expect(list1.searchNodeAt(2).toString()).toBe('Трататусечки!');
  expect(list1.slice(2, 3).toString()).toBe('[ Трататусечки!, Чирибим! ]');
  expect(isDoublyList(list1)).toBe(true);
  expect(isDoublyNode(list1.searchNodeAt(4))).toBe(true);
  expect(list1.isEmpty()).toBe(false);
  expect(list1.listLength()).toBe(4);
  expect(list1.reverse().toString()).toBe('[ Парам-пам-пам!, Чирибим!, Трататусечки!, Трататуськи! ]');
  expect(list1.concat(list2).toString()).toBe('[ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам!, Трам-пам-пам!, Опа! ]');
  expect(list1.addTo('Трам-пам-пам!', 4).toString()).toBe('[ Трататуськи!, Трататусечки!, Чирибим!, Трам-пам-пам!, Парам-пам-пам! ]');
  expect(cycledDoublyListToStr(cycledList)).toBe('[ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам!, Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам!, Трататуськи!... ]');
  expect(cycledList.hasCycle()).toBe(true);
  expect(list1.hasCycle()).toBe(false);
});
