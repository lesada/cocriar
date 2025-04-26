import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Testimonials from ".";

describe("home > components > Testimonials", () => {
	test.skip("render testimonials", async () => {
		render(<Testimonials />);

		const title = screen.getByRole("heading", {
			name: "Empresas que confiam na Co-criar",
		});
		expect(title).toBeVisible();

		const firstCardHeader = screen.getByRole("heading", {
			name: "Alice Souza",
		});
		expect(firstCardHeader).toBeVisible();
	});
});
