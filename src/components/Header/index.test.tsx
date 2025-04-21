import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Header from ".";

const mockPathname = vi.fn();

describe("components > Header", () => {
	test("render", () => {
		render(<Header />);

		expect(screen.getByAltText("Co-criar")).toBeInTheDocument();

		const buttons = screen.getAllByText("Agende um horário");
		expect(buttons.length).toBeGreaterThan(0);
	});

	test("navigation", () => {
		render(<Header />);

		const links = screen.getAllByRole("link");
		expect(links.length).toBeGreaterThan(0);
	});

	test("active link", () => {
		vi.mock("next/navigation", () => ({
			usePathname: () => "/sobre",
		}));

		render(<Header />);

		const activeLink = screen.getAllByText("Sobre");
		expect(activeLink[0]).toHaveClass("text-blue-800 font-bold");
	});
});
