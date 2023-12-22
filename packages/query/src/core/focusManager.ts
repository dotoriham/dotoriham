import { Subscribable } from './subscribable';
import { isServer } from './utils';

type SetupFn = (
  setFocused: (focused?: boolean) => void,
) => (() => void) | undefined;

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
}
