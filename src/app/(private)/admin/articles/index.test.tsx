import { ROUTES_PATHS } from "@/routes";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Articles from "./page";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: mockPush,
	}),
}));

describe("admin articles", () => {
	beforeEach(() => {
		mockPush.mockClear();
	});

	test("render admin articles", () => {
		render(<Articles />);
		expect(screen.getByText("Adicionar novo artigo")).toBeInTheDocument();
	});

	test("should navigate to new article page on button click", () => {
		render(<Articles />);
		const button = screen.getByText("Adicionar novo artigo");
		button.click();
		expect(mockPush).toHaveBeenCalledWith(ROUTES_PATHS.ADMIN_ARTICLE.replace(":id", "novo"));
	});
});
