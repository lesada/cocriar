import "@testing-library/jest-dom/vitest";
import {
  cleanup,
  render as testingRender,
  screen as testingScreen,
} from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

(globalThis as any).render = testingRender;
(globalThis as any).screen = testingScreen;
(globalThis as any).vi = vi;

vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter-mock", variable: "--font-inter" }),
  Poppins: () => ({ className: "poppins-mock", variable: "--font-poppins" }),
}));
