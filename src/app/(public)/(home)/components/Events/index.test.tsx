import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Events from ".";

describe("home > components > Events", () => {
	test("render events", async () => {
		render(<Events />);

		const title = screen.getByText("Próximos eventos");

		expect(title).toBeVisible();

		const titleFirstEvent = screen.getAllByText("Co-criar Desenvolvimento");

		expect(titleFirstEvent[0]).toBeVisible();
	});
});
