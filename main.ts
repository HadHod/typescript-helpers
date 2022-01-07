export function partition(array: any[], predicate: (a: any) => boolean): [any[], any[]] {
  return array.reduce((result: [any[], any[]], a: any) => {
    result[predicate(a) ? 0 : 1].push(a);
    return result;
  }, [[], []]);
}

export function getNumberOfDigits(n: number): number {
  if (n === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(n))) + 1;
}

export function isNumber(a: any): boolean {
  return !isNaN(parseFloat(a)) && isFinite(a);
}

export function isArray(a: any): boolean {
  return Object.prototype.toString.call(a) === '[object Array]';
};

export function getUnique(array: any[]): any[] {
  return [...new Set(array)];
}

export function uniqueBy(fn: Function, array: any[]) {
  return array.reduce((acc, v) => {
    if (!acc.some((x: any) => fn(v, x))) {
      acc.push(v);
    }
    return acc;
  }, []);
}

export function sum(...arr: number[]): number {
  return [...arr].reduce((acc, val) => acc + val, 0);
}

export function getRandomInt(min = 0, max = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isEmpty(val: any) {
  return val == null || !(Object.keys(val) || val).length;
}

// const users = [
//   { name: "fred", age: 48 },
//   { name: "barney", age: 36 },
//   { name: "fred", age: 40 },
// ];
// orderBy(users, ["name", "age"], ["asc", "desc"]); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
// orderBy(users, ["name", "age"]); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]

const orderBy = <T>(
  arr: T[],
  props: (keyof T)[],
  orders?: ("asc" | "desc")[]
) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
