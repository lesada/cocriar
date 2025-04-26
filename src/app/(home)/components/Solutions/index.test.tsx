import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Solutions from ".";

describe("components > Solutions", () => {
	test("render solutions without errors", async () => {
		render(<Solutions />);

		const title = screen.getByRole("heading", {
			name: /soluções co\-criar/i,
		});
		expect(title).toBeVisible();

		const firstCardHeader = screen.getByRole("heading", {
			name: /desenvolvimento pessoal/i,
		});
		expect(firstCardHeader).toBeVisible();

		const firstCardDescription = await screen.findByText(
			/desenvolvimento com coaching executivo individual/i,
		);
		expect(firstCardDescription).toBeVisible();
	});
});
