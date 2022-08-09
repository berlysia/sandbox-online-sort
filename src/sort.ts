export function sort<T>(arr: T[]): T[] {
  function merge(left: T[], right: T[]) {
    const result: T[] = [];
    while (left.length > 0 || right.length> 0) {
      if (left.length>0 && right.length === 0) {
        result.push(left.shift()!);
        continue;
      }
      if (right.length>0 && left.length === 0) {
        result.push(right.shift()!);
        continue;
      }
      const lh = left[0];
      const rh = right[0];
      if (lh < rh) {
        result.push(left.shift()!);
      } else {
        result.push(right.shift()!);
      }
    }

    return result;
  }

  let splitted: T[][] = arr.map(x => [x]);
  let result = splitted;

  while(result.length > 1) {
    const next: T[][] = [];
    for (let i = 0, l = result.length; i + 1 < l; i+=2) {
      next.push(merge(result[i], result[i+1]));
    }
    if (result.length % 2 === 1) {
      next.push(result.at(-1)!);
    }

    result = next;
  }

  return result[0];
}
