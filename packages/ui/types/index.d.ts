import '@dotoriham/store';

declare module '*.module.css' {
  const value: Record<string, string>;
  export default value;
}

export {};
