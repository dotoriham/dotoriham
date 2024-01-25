import { beforeEach, describe, it, expect, vi } from 'vitest';

import EventManager from './event-manger';
const event = {
  CHANGE: 'change',
  CLEAR: 'clear',
  CLICK: 'click',
} as const;

const eventList = [event.CLICK, event.CHANGE, event.CLEAR] as const;

vi.useFakeTimers();

const noop = () => {
  return;
};

const testEventManager = new EventManager();

beforeEach(() => {
  testEventManager.list.clear();
  testEventManager.emitQueue.clear();
});

describe('EventManager', () => {
  it('이벤트를 등록하면 event Manager에 해당 이벤트가 저장된다.', () => {
    testEventManager
      .on(event.CLICK, noop)
      .on(event.CHANGE, noop)
      .on(event.CLEAR, noop);

    for (const event of eventList) {
      expect(testEventManager.list.has(event)).toBe(true);
    }
  });

  it('등록된 이벤트를 실행 시키면 등록된 콜백이 실행된다.', () => {
    const cb = vi.fn();

    testEventManager.on(event.CHANGE, cb);
    expect(cb).not.toHaveBeenCalled();

    testEventManager.emit(event.CHANGE, 1);
    vi.runAllTimers();
    expect(cb).toHaveBeenCalled();
  });

  it('이벤트에 등록된 콜백함수를 제거할 수 있다.', () => {
    const cb1 = vi.fn();
    const cb2 = vi.fn();
    testEventManager.on(event.CHANGE, cb1);
    testEventManager.on(event.CHANGE, cb2);

    testEventManager.emit(event.CHANGE, 1);
    vi.runAllTimers();

    expect(cb1).toHaveBeenCalled();
    expect(cb2).toHaveBeenCalled();

    testEventManager.off(event.CHANGE, cb1);

    testEventManager.emit(event.CHANGE, 1);
    vi.runAllTimers();

    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(2);
  });

  it('이벤트에 등록된 특정 콜백함수의 실행을 취소할 수 있다.', () => {
    const cb = vi.fn();
    testEventManager.on(event.CHANGE, cb);
    testEventManager.emit(event.CHANGE, 1);
    testEventManager.cancelEmit(event.CHANGE);
    vi.runAllTimers();
    expect(cb).not.toHaveBeenCalled();
  });

  it('이벤트를 제거할 수 있다.', () => {
    testEventManager.on(event.CHANGE, noop);
    expect(testEventManager.list.size).toBe(1);

    testEventManager.off(event.CHANGE);
    expect(testEventManager.list.size).toBe(0);
  });
});
