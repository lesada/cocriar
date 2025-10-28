import { renderWithClient } from "@/_tests/utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Event from "./page";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: mockPush,
	}),
	useParams: () => ({ id: "123" }),
}));

describe("admin event by id", () => {
	beforeEach(() => {
		mockPush.mockClear();
	});

	test("render admin event page", () => {
		renderWithClient(<Event />);
		expect(screen.getByText("Dados do evento")).toBeInTheDocument();
	});

	test("open modal add image", async () => {
		renderWithClient(<Event />);
		const addImageButton = screen.getByText("Adicionar mídia");
		await userEvent.click(addImageButton);
	});
});
