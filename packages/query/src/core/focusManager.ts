import { Subscribable } from './subscribable';
import { isServer } from './utils';

type SetupFn = (
  setFocused: (focused?: boolean) => void,
) => (() => void) | undefined;

/**
 * @description 기본 이벤트 리스너를 변경하거나 포커스 상태를 수동으로 변경하는 데 사용할 수 있습니다.
 * 포커스 상태를 수동으로 변경하면서 구독된 이벤트 리스너들을 실행시킬 수 있음
 */
export class FocusManager extends Subscribable {
  #focused?: boolean;
  #cleanup?: () => void;
  #setup: SetupFn;

  constructor() {
    super();
    this.#setup = (onFocus) => {
      // addEventListener does not exist in React Native, but window does
      if (isServer === false && window.addEventListener != null) {
        const listener = () => onFocus();
        window.addEventListener('visibilitychange', listener, false);

        return () => {
          window.removeEventListener('visibilitychange', listener);
        };
      }
      return;
    };
  }

  protected onSubscribe(): void {
    if (this.#cleanup == null) {
      this.setEventListener(this.#setup);
    }
  }

  protected onUnsubscribe() {
    if (this.hasListeners() == null) {
      this.#cleanup?.();
      this.#cleanup = undefined;
    }
  }

  setEventListener(setup: SetupFn): void {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === 'boolean') {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }

  setFocused(focused?: boolean): void {
    const changed = this.#focused !== focused;
    if (changed === true) {
      this.#focused = focused;
      this.onFocus();
    }
  }

  onFocus(): void {
    this.listeners.forEach((listener) => listener());
  }

  isFocused(): boolean {
    if (typeof this.#focused === 'boolean') {
      return this.#focused;
    }

    // document global can be unavailable in react native
    return globalThis.document.visibilityState !== 'hidden';
  }
}
