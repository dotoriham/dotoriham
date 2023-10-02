/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  type Callback,
  type CallbackParametar,
  type TimeoutId,
} from './event-manager.types';

class EventManager<T> {
  list: Map<T, Callback[]> = new Map();
  emitQueue: Map<T, TimeoutId[]> = new Map();

  cancelEmit(event: T): EventManager<T> {
    const timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue.delete(event);
    }

    return this;
  }

  emit(event: T, ...args: CallbackParametar) {
    this.list.has(event) &&
      this.list.get(event)!.forEach((callback) => {
        const timer: TimeoutId = setTimeout(() => {
          // @ts-ignore
          callback(...args);
        }, 0);

        this.emitQueue.has(event) || this.emitQueue.set(event, []);
        this.emitQueue.get(event)!.push(timer);
      });
  }

  off(event: T, callback?: Callback): EventManager<T> {
    if (callback) {
      const cb = this.list.get(event)!.filter((cb) => cb !== callback);
      this.list.set(event, cb);
      return this;
    }
    this.list.delete(event);
    return this;
  }

  on(event: T, callback: Callback): EventManager<T> {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event)!.push(callback);
    return this;
  }
}

export default EventManager;
