import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import AdminPanel from "./page";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: mockPush,
	}),
}));

describe("admin panel", () => {
	beforeEach(() => {
		mockPush.mockClear();
	});

	test("render admin panel", () => {
		render(<AdminPanel />);
		expect(screen.getByText("Painel de Controle")).toBeInTheDocument();
	});

	test("redirect to articles", () => {
		render(<AdminPanel />);
		const button = screen.getByText("Adicionar novo artigo");
		fireEvent.click(button);
		expect(mockPush).toHaveBeenCalledWith("/admin/artigos");
	});

	test("redirect to events", () => {
		render(<AdminPanel />);
		const button = screen.getByText("Adicionar novo evento");
		fireEvent.click(button);
		expect(mockPush).toHaveBeenCalledWith("/admin/eventos");
	});
});
