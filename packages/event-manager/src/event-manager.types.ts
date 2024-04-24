/* eslint-disable @typescript-eslint/no-explicit-any */
export type TimeoutId = ReturnType<typeof setTimeout>;

export type Callback = (...args: any[]) => void;

export type CallbackParameter = Parameters<Callback>;

export type EventKey = string | number;
