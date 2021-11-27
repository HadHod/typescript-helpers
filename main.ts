export function partition(predicate: (a: any) => boolean): [any[], any[]] {
  return this.reduce((result: [any[], any[]], a: any) => {
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

export function isNumber(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function isArray(o: any): boolean {
  return Object.prototype.toString.call(o) === '[object Array]';
};
