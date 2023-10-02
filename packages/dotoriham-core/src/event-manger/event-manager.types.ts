/* eslint-disable @typescript-eslint/no-explicit-any */
export type TimeoutId = ReturnType<typeof setTimeout>;

export type Callback = (...args: any[]) => void;

export type CallbackParametar = Parameters<Callback>;

export type EventKey = string | number;
