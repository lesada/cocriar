import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Button from ".";

describe("components > Button", () => {
	test("render children", () => {
		render(<Button>Click me</Button>);

		expect(
			screen.getByRole("button", { name: /click me/i }),
		).toBeInTheDocument();
	});
});
