// src/types/elfsight.d.ts
export {};

declare global {
  interface Window {
    ElfsightApp?: {
      init: () => void;
    };
  }
}
