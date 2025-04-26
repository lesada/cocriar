import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test, vi } from "vitest";
import Testimonials from ".";

vi.mock("embla-carousel-react", () => {
	return {
		__esModule: true,
		default: vi.fn(),
		useEmblaCarousel: vi.fn().mockReturnValue([vi.fn(), { on: vi.fn() }]),
	};
});

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
