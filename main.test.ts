import { partition, getNumberOfDigits, isNumber, isArray, getUnique, uniqueBy, sum } from './main';

describe('partition', () => {
  test('should split array correctly', () => {
    const [even, odd] = partition([1, 2, 3, 4], x => x%2 === 0);
    expect(odd).toStrictEqual([1, 3]);
    expect(even).toStrictEqual([2, 4]);
  });
});

describe('getNumberOfDigits', () => {
  const testData: number[][] = [
    [-2, 1],
    [0, 1],
    [1, 1],
    [10, 2],
    [1234567890, 10],
    [123456789012345678901234567890, 30],
  ];

  test.each(testData)('getNumberOfDigits(%i) === %i', (a, expected) => {
    expect(getNumberOfDigits(a)).toBe(expected);
  });
});

describe('isNumber', () => {
  const testData: any[][] = [
    [-1234567890, true],
    [0, true],
    [1234567890, true],
    [null, false],
    [undefined, false],
    [Infinity, false],
    [NaN, false],
    [{}, false],
    [[], false],
    ['string', false],
  ];

  test.each(testData)('isNumber(%i) === %i', (a, expected) => {
    expect(isNumber(a)).toBe(expected);
  });
});

describe('isArray', () => {
  const testData: any[][] = [
    [-1234567890, false],
    [0, false],
    [1234567890, false],
    [null, false],
    [undefined, false],
    [Infinity, false],
    [NaN, false],
    [{}, false],
    [[], true],
    ['string', false],
  ];

  test.each(testData)('isArray(%i) === %i', (a, expected) => {
    expect(isArray(a)).toBe(expected);
  });
});

describe('getUnique', () => {
  test('should return empty array', () => {
    expect(getUnique([])).toStrictEqual([]);
  });

  test('should remove duplicates', () => {
    expect(getUnique([1, 1, 2, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('uniqueBy', () => {
  test('should return 3 unique objects', () => {
    const result = uniqueBy((a: any, b: any) => a.id == b.id, [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ]);
    expect(result).toStrictEqual([{ id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' }]);
  });
});

describe('sum', () => {
  test('should sum up', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });
});
