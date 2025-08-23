import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Eventos from "./page";

describe("events", () => {
	test("render events", async () => {
		render(<Eventos />);

		const titleCard = screen.getByText("Cybersegurança em 2023: Desafios");
		expect(titleCard).toBeVisible();
	});
});
