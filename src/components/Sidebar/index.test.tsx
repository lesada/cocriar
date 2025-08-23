import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Sidebar from ".";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("components > Sidebar", () => {
	test("render component", () => {
		render(<Sidebar />);

		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("should have a button to toggle menu", async () => {
		render(<Sidebar />);

		
		expect(screen.queryByTestId("sidebar-logo")).toBeNull();
		const button = screen.getByTestId("sidebar-toggle-button");
		expect(button).toBeInTheDocument();
		await userEvent.click(button);
		expect(screen.queryByTestId("sidebar-logo")).not.toBeNull();
	});
});
