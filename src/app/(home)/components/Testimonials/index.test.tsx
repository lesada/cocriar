import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test, vi } from "vitest";
import Testimonials from ".";

describe("home > components > Testimonials", () => {
	afterAll(() => {
		vi.resetAllMocks();
	});

	test("render testimonials", async () => {
		render(<Testimonials />);

		const title = screen.getByText("Empresas que confiam na Co-criar");

		expect(title).toBeVisible();

		const firstCardHeader = screen.getByText("Alice Souza");
		expect(firstCardHeader).toBeVisible();
	});
});
