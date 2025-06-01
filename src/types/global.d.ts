declare global {
  namespace JSX {
    // Definition des fehlenden Interface LibraryManagedAttributes für React 19 Kompatibilität
    interface LibraryManagedAttributes<C, P> {
      [attributeName: string]: any;
    }
  }
}

export {};
