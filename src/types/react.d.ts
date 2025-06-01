declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
}
declare module 'react' {
  // Exportiere alle originalen React-Komponenten und Hooks
  export const useState: any;
  export const useEffect: any;
  export const useContext: any;
  export const useReducer: any;
  export const useCallback: any;
  export const useMemo: any;
  export const useRef: any;
  export const useImperativeHandle: any;
  export const useLayoutEffect: any;
  export const useDebugValue: any;
  
  // Füge Suspense explizit hinzu
  export const Suspense: React.ExoticComponent<{
    fallback: React.ReactNode;
    children?: React.ReactNode;
  }>;
  
  export const Fragment: any;
  export const createContext: any;
  export const createElement: any;
  export const forwardRef: any;
  export const memo: any;
  export const lazy: any;
  
  // React-Standard-Export
  const React: any;
  export default React;
}