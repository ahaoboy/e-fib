// @ts-nocheck
type Len<T extends any[]> = T["length"];
type IncList<T extends any[]> = [any, ...T];
type AddList<A extends any[], B extends any[]> = [...A, ...B];
type FromLen<T extends number, A extends any[] = []> = Len<A> extends T
  ? A
  : FromLen<T, IncList<A>>;
export type Add<A extends number, B extends number> = Len<
  AddList<FromLen<A>, FromLen<B>>
>;
type SubList<A extends any[], B extends any[], C extends any[] = []> = Len<
  A
> extends Len<AddList<B, C>>
  ? C
  : SubList<A, B, IncList<C>>;

export type Sub<A extends number, B extends number> = Len<
  SubList<FromLen<A>, FromLen<B>>
>;

export type Fib<N extends number> = N extends 0
  ? 0
  : N extends 1
  ? 1
  : Add<Fib<Sub<N, 1>>, Fib<Sub<N, 2>>>;
