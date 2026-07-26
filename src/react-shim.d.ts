declare module 'react' {
  export type ReactNode = any;
  export type ElementType = any;
  export type FormEvent<T = any> = { preventDefault(): void; currentTarget: T };
  export function createContext<T = any>(initial?: T): { Provider: any };
  export function useContext<T = any>(context: any): T;
  export function useState<T = any>(initial?: T | (() => T)): [T, (value: T | ((previous: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps?: any[]): T;
  const React: { useEffect: typeof useEffect };
  export default React;
}
declare module 'react-dom/client' {
  export function createRoot(element: Element): { render(component: any): void };
}
declare module 'react/jsx-runtime' {
  export const jsx: any; export const jsxs: any; export const Fragment: any;
}
declare namespace JSX {
  interface IntrinsicElements { [elemName: string]: any }
  interface IntrinsicAttributes { key?: any; children?: any; [prop: string]: any }
  interface ElementChildrenAttribute { children: any }
}
declare namespace React {
  type ReactNode = any;
  type ElementType = any;
  type FormEvent<T = any> = { preventDefault(): void; currentTarget: T };
}
