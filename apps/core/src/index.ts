export const sum = (a: number, b: number) => {
  return a + b;
};
export const fib = (n: number): number => {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

export * from './type'