import {
  RenderResult,
  screen as testingLibraryScreen,
} from "@testing-library/react";

// Declaração global para `screen` e `render`
declare global {
  const render: (ui: React.ReactElement) => RenderResult;
  const screen: typeof testingLibraryScreen; // Tipagem correta para `screen`
  const vi: typeof vi;
}

export {};
