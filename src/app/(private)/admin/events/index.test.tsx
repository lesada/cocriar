import { ROUTES_PATHS } from "@/routes";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Events from "./page";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: mockPush,
	}),
}));

describe("admin events", () => {
	beforeEach(() => {
		mockPush.mockClear();
	});

	test("render admin events", () => {
		render(<Events />);
		expect(screen.getByText("Adicionar novo evento")).toBeInTheDocument();
	});

	test("should navigate to new article page on button click", () => {
		render(<Events />);
		const button = screen.getByText("Adicionar novo evento");
		button.click();
		expect(mockPush).toHaveBeenCalledWith(ROUTES_PATHS.ADMIN_EVENT.replace(":id", "novo"));
	});
});
