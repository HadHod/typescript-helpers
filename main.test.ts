import { partition } from './main';

describe('partition', () => {
  test('should split array correctly', () => {
    const [even, odd] = partition([1, 2, 3, 4], x => x%2 === 0);
    expect(odd).toStrictEqual([1, 3]);
    expect(even).toStrictEqual([2, 4]);
  });
});