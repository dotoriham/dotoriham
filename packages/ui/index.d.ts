declare module '*.module.css' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
