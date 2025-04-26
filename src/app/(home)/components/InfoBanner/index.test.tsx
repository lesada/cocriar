import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import InfoBanner from ".";

describe("components > Info Banner", () => {
	test("render info banner without errors", async () => {
		render(<InfoBanner />);

		const tag = screen.getByRole("heading", {
			name: /por que a co\-criar\?/i,
		});
		expect(tag).toBeVisible();

		const title = screen.getByRole("heading", {
			name: /nosso proposito é movimentar e evoluir/i,
		});
		expect(title).toBeVisible();

		const button = screen.getByRole("button", {
			name: /saiba mais/i,
		});
		expect(button).toBeVisible();
	});
});
