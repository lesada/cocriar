import { screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("Page", () => {
  render(<Page />);
  expect(screen.getByText("Hello world!")).toBeDefined();
});
