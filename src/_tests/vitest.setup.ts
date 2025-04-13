import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter-mock", variable: "--font-inter" }),
  Poppins: () => ({ className: "poppins-mock", variable: "--font-poppins" }),
}));
