export class QueryClient {
  #mountCount: number;

  constructor() {
    this.#mountCount = 0;
  }

  mount(): void {
    this.#mountCount++;
    if (this.#mountCount !== 1) {
      return;
    }
  }
  unmount(): void {
    this.#mountCount--;
    if (this.#mountCount !== 0) {
      return;
    }
  }
}
