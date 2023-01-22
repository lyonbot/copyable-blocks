/**
 * make a throttled function that actually executes with the last given arguments.
 */
export function throttle<T extends (...args: any) => void>(fn: T, wait: number) {
  let timerId: any;
  let lastArgs: any[] | undefined;

  function cancel(invoke = false) {
    if (!timerId) return;

    if (invoke && lastArgs) fn(...lastArgs);
    clearTimeout(timerId);

    timerId = null;
    lastArgs = undefined;
  }

  const throttled = function throttled(...args: any[]) {
    lastArgs = args;

    if (!timerId) {
      timerId = setTimeout(() => cancel(true), wait);
    }
  } as unknown as T & { cancel(): void; flush(): void };

  throttled.cancel = () => cancel(false);
  throttled.flush = () => cancel(true);

  return throttled;
}

/**
 * wrap a function. in the following calls, if `input` didn't change, `fn` will not execute
 *
 * the wrapped function returns `undefined` if `fn` is not called, or the actual call's return value
 */
export function wrapAsTrigger<T, U>(
  fn: (input: T, lastInput?: T) => U,
  isEqual: (a: T, b: T) => boolean = (a, b) => a == b
): (input: T) => U | void {
  let initialized = false;
  let lastValue: T | undefined;

  return (input: T) => {
    if (initialized && isEqual(lastValue!, input)) return;
    initialized = true;
    lastValue = input;
    fn(input, lastValue);
  };
}

/**
 * extract and remove items from the array safely.
 *
 * this will mutate `arr` the input array.
 *
 * @returns removed items in `indexes` order
 */
export function removeItems<T>(arr: T[], indexes: number[]): T[] {
  const ans = indexes.map(i => arr[i]!).filter(x => x !== undefined);
  [...indexes].sort((a, b) => b - a).forEach(i => arr.splice(i, 1));
  return ans;
}

/**
 * move items inside an array safely.
 *
 * this will mutate `arr` the input array.
 */
export function moveItemsInArray(arr: any[], fromIndexes: number[], toIndex: number) {
  const items = removeItems(arr, fromIndexes);
  arr.splice(toIndex, 0, ...items);
}

/**
 * move items between two arrays safely.
 *
 * this will mutate `fromArr` and `toArr`
 *
 * @param fromArr
 * @param fromIndexes
 * @param toArr
 * @param toIndex
 */
export function moveItemsBetweenArrays(fromArr: any[], fromIndexes: number[], toArr: any[], toIndex: number) {
  const items = removeItems(fromArr, fromIndexes);
  toArr.splice(toIndex, 0, ...items);
}

/**
 * equals to `Object.assign` but with TypeScript restrictions
 */
export const assign = Object.assign as <T>(obj: T, another: Partial<T>) => T;
